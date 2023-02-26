import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";
import "../../src/App.scss";

export const Audience = () => {
  // state declarations
  const [requestData, setRequestData] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // specifying db reference
  const collectionRef = collection(db, "musics");

  // submitting music requests to db
  const handleSubmit = async (e) => {
    // preventing page reload on submit
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collectionRef, {
        music: requestData,
        isRequested: true,
        timestamp: serverTimestamp(),
      });
      setRequestData("");
      setSubmitted(true);
      setLoading(false);

      // css effect timer
      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

      // catching error if any
    } catch (err) {
      console.log(err, "there was an error submitting request");
    }
  };

  // component
  return (
    <div className="bg-image relative flex flex-col justify-center items-center text-white">
      <div className="backdrop-blur-[8px] w-full sm:w-full sm:h-full h-full absolute"></div>
      <div className="absolute w-full flex flex-col gap-4 items-center justify-center py-4 md:py-10 lg:py-40 px-4 md:px-10 lg:px-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-green-400">
                Your request has been submitted 🙂.
              </h1>
            </motion.div>
          )}
          <form className="flex flex-col gap-4">
            <h1>Input the title of a song you want to request.</h1>
            <input
              type="text"
              className="text-black p-2"
              placeholder="Input song name"
              value={requestData}
              onChange={(e) => setRequestData(e.target.value)}
            />
            <button
              className="bg-[#666666] rounded-sm px-10 py-2  hover:bg-[#888888]"
              onClick={requestData?.length > 2 ? handleSubmit : null}
            >
              {loading === true ? "please wait..." : "request"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
