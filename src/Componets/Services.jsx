import React from "react";
import { TbWorldWww } from "react-icons/tb";
import { FaRegSmileWink } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { LuMonitor } from "react-icons/lu";
import { FaMobileScreen } from "react-icons/fa6";
import { motion } from "framer-motion";
function Services() {
  const cards = [
    {
      id: 1,
      name: "Web Development",
      child: <TbWorldWww size={50} />,
      paragraph:
        "Creating dynamic and engaging websites tailored to your needs using the latest technologies.",
        delay: 0.2,
    },

    {
      id: 4,
      name: "Frontend Development",
      child: <LuMonitor size={50} />,
      paragraph:
        "Crafting visually appealing and interactive front-end interfaces with precision and creativity.",
        delay: 0.3,
    },
    {
      id: 5,
      name: "Responsiveness",
      child: <FaMobileScreen size={50} />,
      paragraph:
        "Ensuring seamless user experiences across all devices with fully responsive designs.",
        delay: 0.4,
    },
    {
      id: 2,
      name: "Satisfied clients",
      child: <FaRegSmileWink size={50} />,
      paragraph:
        "Delivering exceptional results with a focus on client satisfaction and positive experiences.",
        delay: 0.5,
    },
    {
      id: 3,
      name: "24/7 support",
      child: <FaHeadset size={50} />,
      paragraph:
        "Providing round-the-clock support to ensure your project's success and peace of mind.",
        delay: 0.6,
    },
  ];


  const SlideLeft = (delay) => {
    return {
      initial: {
        opacity: 0,
        x: 50,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.3,
          delay: delay,
          ease: "easeInOut",
        },
      },
    };
  };


  return (
    <>
      <div id="service" className=" px-4 sm:px-0 py-16">
        <h1 className=" text-2xl sm:text-4xl font-medium w-fit mx-auto border-b-2 border-red-400  hover:
          hover:text-cyan-500 ">
          Services
        </h1>

        <div className="px-10 flex flex-col pt-10 sm:flex-row justify-center gap-5">
          {cards.map((card) => (
            <motion.div 
            variants={SlideLeft(card.delay)}
            initial="initial"
            whileInView={"animate"}
              key={card.id}
              className="bg-gray-100 hover:bg-white hover:shadow-2xl  sm:w-1/6 p-5 flex flex-col  items-center rounded-xl"
            >
              <div>{card.child}</div>
              <h1 className="py-3 font-semibold">{card.name}</h1>
              <p className="text-justify">{card.paragraph}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
