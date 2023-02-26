import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { motion } from "framer-motion";
import "../../src/App.scss";

// exporting unit test-id for Jest Testing Library
export const LIST_TEST_ID = "LIST_TEST_ID";

export const Dj = () => {
  // state declarations
  const [musics, setMusics] = useState([]);
  const [motionState, setMotionState] = useState(100);
  const [hidden, setHidden] = useState(true);
  const [djModal, setDjModal] = useState(false);
  const [musicId, setMusicId] = useState();

  // specifying db reference
  const collectionRef = collection(db, "musics");

  // scroll-to-top button function
  const handleClick = () => {
    document
      .getElementById("#list")
      .scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // fetching real-time music requests from db
  useEffect(() => {
    // getter function block begins here
    const getMusics = async () => {
      const queryLoad = query(collectionRef, orderBy("timestamp"));
      try {
        onSnapshot(queryLoad, (snapshot) => {
          let musicData = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));

          // saving music id to state for easy tracking
          setMusicId(snapshot.docs.map((doc) => doc.id));

          //display most recent request on top of the list
          const sortedMusicData = musicData.sort(
            (a, b) => b.timestamp.valueOf() - a.timestamp.valueOf()
          );
          setMusics(sortedMusicData);
        });

        // catching error if any
      } catch (err) {
        console.log(err, "there was an error recieving a music request");
      }

      // timer for css effect
      setTimeout(() => {
        setHidden(false);
        setMotionState(0);
      }, 4000);
    };
    // getter function block ends here

    // call getter function
    getMusics();
  });

  // handle modal on music list
  const handleModalClick = () => {
    setDjModal(!djModal);
  }; // TODO: implement better

  // component
  return (
    <div className="bg-image-dj relative flex flex-col text-white">
      <div className="backdrop-blur-[8px] w-full sm:w-full sm:h-full h-full absolute"></div>
      <div
        data-testid={LIST_TEST_ID}
        className="absolute flex flex-col h-full items-start justify-start py-8 md:py-20 lg:py-40 px-4 md:px-16 lg:px-40"
      >
        <h1>
          The most recent music request you recieve will be listed at the top.{" "}
        </h1>
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
              className="w-full flex flex-row relative items-center justify-between gap-5 music p-3 mb-2"
            >
              <h1>
                <span className="text-black">🎧 </span>
                {music}
              </h1>
              <button onClick={() => handleModalClick()} className="font-bold">
                ⋮
              </button>
              {djModal && (
                <div
                  className={`${
                    musicId === id ? "flex" : "hidden"
                  } absolute right-10 flex flex-row gap-2`}
                >
                  <ul>
                    <li className="border-b-gray-500 bg-gray-400 p-2 rounded-sm font-thin text-xs">
                      Unavailable
                    </li>
                    <li className="border-b-gray-500 bg-gray-400 p-2 rounded-sm font-thin text-xs">
                      Already played
                    </li>
                  </ul>
                </div>
              )}
              {/* TODO: Implement Time Display */}
              {/* <span>
                Requested at:{" "}
                <i>
                  {new Date(timestamp.seconds * 1000).getHours() +
                    ":" +
                    new Date(timestamp.seconds * 1000).getMinutes()}
                </i>
              </span> */}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 pr-12 md:pr-20 lg:pr-40 pb-16 md:pb-24 lg:pb-10 w-full flex flex-row items-start justify-end lg:justify-start sm:pl-8 sm:md:pl-16 sm:lg:pl-40">
        <button
          className="w-16 h-16 flex flex-col items-center justify-center rounded-[50%] text-black font-bold text-2xl bg-gray-300 shadow-lg animate-[bounce_1.5s_infinite_100ms] cursor-pointer"
          onClick={() => handleClick()}
        >
          ↑
        </button>
      </div>
    </div>
  );
};
