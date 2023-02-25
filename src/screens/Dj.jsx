import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { motion } from "framer-motion";
import "../../src/App.scss";

export const Dj = () => {
  const [musics, setMusics] = useState([]);
  const [motionState, setMotionState] = useState(100);
  const [hidden, setHidden] = useState(true);

  const collectionRef = collection(db, "musics");

  const handleClick = () => {
    document
      .getElementById("#list")
      .scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getMusics = async () => {
      const queryLoad = query(collectionRef, orderBy("timestamp"));
      onSnapshot(queryLoad, (snapshot) => {
        let musicData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const sortedMusicData = musicData.sort(
          (a, b) => b.timestamp.valueOf() - a.timestamp.valueOf()
        );
        setMusics(sortedMusicData);
      });
      setTimeout(() => {
        setHidden(false);
        setMotionState(0);
      }, 4000);
    };
    getMusics();
  }, []);

  return (
    <div className="bg-image-dj relative flex flex-col text-white">
      <div className="backdrop-blur-[8px] w-full sm:w-full sm:h-full h-full absolute"></div>
      <div className="absolute flex flex-col h-full items-start justify-start py-8 md:py-20 lg:py-40 px-4 md:px-10 lg:px-40">
        <h1>The most recent request you recieve will be listed at the top.</h1>
        <br />
        <div
          id="#list"
          className="flex flex-col h-full overflow-y-scroll scrollbar w-full"
        >
          {musics.map(({ music, id, timestamp }) => (
            <motion.div
              animate={{ x: motionState }}
              hidden={hidden}
              key={id}
              className="w-full music p-3 mb-2"
            >
              <h1>
                <span className="text-black">🎧</span>
                {music}
                {/* <i>{new Date(timestamp.seconds * 1000).toLocaleString()}</i> */}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 pl-4 md:pl-10 lg:pl-40 pb-8 md:pb-20 lg:pb-10 w-full flex flex-row items-start justify-start">
        <button
          className="w-10 h-10 flex flex-col items-center justify-center rounded-[50%] text-black bg-gray-300 shadow-lg animate-[bounce_1.5s_infinite_100ms] cursor-pointer"
          onClick={() => handleClick()}
        >
          ↑
        </button>
      </div>
    </div>
  );
};
