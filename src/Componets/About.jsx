import React from "react";
import pic from "../assets/images/ab.png";
import { delay, motion } from "framer-motion";
import { FaBookReader } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
function About() {

  const data=[
    {id:1,name:"10,000+ Courses",child:(<FaBookReader size={30} />)},
    {id:2,name:"Expert Instruction",child:(<GrUserExpert size={30} />)},
    {id:3,name:"Lifetime Access",child:(<IoMdTime size={30} />)},
  ]
  
  const SlideLeft = (delay) => {
    return {
      initial: {
        opacity: 0,
        y: 250,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
  delay:0.3,
          ease: "easeInOut",
        },
      },
    };
  };

  return (
    <>
      <motion.section id="about"
       variants={SlideLeft(delay)}
            initial="initial"
            whileInView={"animate"}    className="container mx-auto px-3 sm:px-10 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl font-medium w-fit mx-auto border-b-2 border-red-400  hover:
          hover:text-cyan-500">About Us</h2>
        </div>

        <div className="grid grid-cols-1 ">
          <div className="bg-white p-6 md:flex  mx-auto flex-row-reverse justify-around gap-5  ">
            <img src={pic} alt="Coding Journey Image 2" className="rounded mb-4 " />
            <div className="md:w-1/2">
             
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-justify ">
                Our mission is to deliver high-quality, accessible, and
                affordable web development courses that cater to learners of all
                levels, from beginners to advanced professionals. We strive to
                create a comprehensive learning environment that fosters growth
                and innovation, providing our students with the tools and
                knowledge they need to succeed in the ever-evolving field of web
                development. 
              </p>
              <h3 className="text-2xl pt-5 font-bold text-gray-800 mb-2">The World's Leading Online learning Platform</h3>
           
                {data.map((item)=>
                <div key={item.id} className="flex my-3 gap-6 items-center bg-gray-100 hover:bg-white hover:shadow-xl py-4 px-4 rounded-lg">
                {item.child}
              <p>{item.name}</p>
            </div>
                )}
                
          
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default About;
