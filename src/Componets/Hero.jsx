import React from "react";
import pic from '../assets/images/developers.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";


export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

function Hero() {
  return (
    <>
  <div id="home" className="flex  items-center justify-center min-h-screen w-full">
  <div className="grid grid-cols-1 md:grid-cols-2   items-center  mx-auto px-3">
    <motion.div   variants={FadeUp(0.6)}
              initial="initial"
              animate="animate" className="sm:w-2/3  py-5 w-full mx-auto">
      <h1 className="sm:text-5xl  text-2xl py-2 font-semibold text-center sm:text-left">
        Let's Learn to build a <span className="text-cyan-600">Website</span> for your business
      </h1>
      <button className="bg-cyan-500 flex mx-auto group sm:mx-0 justify-around items-center gap-3 shadow-xl hover:bg-cyan-700 text-white font-bold py-1 px-6 rounded">
  Get Started
  <FaLongArrowAltRight className="transform group-hover:-rotate-45 group-hover:duration-300 group-hover:ease-in-out" size={20} />
</button>

            
    </motion.div>
    <motion.div   variants={FadeUp(0.6)}
              initial="initial"
              animate="animate" className="flex justify-center ">
      <img
        src={pic}
        
        alt="Website Building"
        className=""
      />
    </motion.div>
  </div>
</div>

    </>
  );
}

export default Hero;
