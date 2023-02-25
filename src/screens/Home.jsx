import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../../src/App.scss";

export const Home = () => {
  const navigate = useNavigate();
  const goToPage = (route) => {
    navigate({ pathname: route });
    // toggleNav();
  };

  return (
    <div className="bg-image relative flex flex-col justify-center items-center text-white">
      <div className="backdrop-blur-[8px] w-full sm:w-full sm:h-full h-full absolute"></div>
      <div className="absolute flex flex-col items-center justify-center space-y-4 px-4 md:px-10 lg:px-40">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div className="w-24 h-24 rounded-[50%] bg-gray-300 text-black font-bold flex flex-row items-center justify-center">
            <div className="w-[85%] h-[85%] bg-black rounded-[50%] flex flex-row items-center justify-center">
              <div className="w-[95%] h-[95%] bg-gray-300 rounded-[50%] flex flex-row items-center justify-center">
                <span className="logo text-2xl">CMR</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-center font-extralight">
            Welcome to CMR! This is a Club Music Request platform, and we're
            excited to provide you with an easy way to request your favorite
            songs to your DJs. Whatever your music taste is, this website allows
            you to make song requests from the comfort of your own phone or
            computer.
            <br />
            Simply input the song you want to hear, submit your request, and let
            your DJ take care of the rest. <br />
            So, let's get the party started!
          </h1>
          <br />
          <h1 className="text-center font-extralight">
            ✨Please select what you are✨
          </h1>
          <br />
          <div className="w-full flex flex-row items-center justify-center gap-4">
            <button
              className="bg-[#666666] px-10 py-2 w-[50%] md:w-[30%] lg:w-[30%] hover:bg-[#888888]"
              onClick={() => goToPage("/dj", "Audience")}
            >
              DJ 🎧
            </button>
            <button
              className="bg-[#666666] px-10 py-2 w-[50%] md:w-[30%] lg:w-[30%] hover:bg-[#888888]"
              onClick={() => goToPage("/audience", "Audience")}
            >
              Audience 🎉
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
