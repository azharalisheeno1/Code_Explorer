import React, { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
function Navbar() {
  const [isopen, setIsopen] = useState(false);
  const Menues = [
    { path: "home", name: "Home" },
    { path: "service", name: "Services" },
    { path: "about", name: "About Us" },
    { path: "team", name: "Our Team" },
    { path: "contact", name: "Contact Us" },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex shadow-md  z-[999] fixed w-full justify-between px-10 py-8  mx-auto"
      >
        <div>
          <h1
            className="text-lg hover:border-b-2 border-red-400 hover:
          hover:text-cyan-500 sm:text-2xl font-bold "
          >
            Code Explorer
          </h1>
        </div>
        <div className="sm:flex justify-center items-center hidden gap-5">
          {Menues.map((menu, index) => (
            <ul key={index}>
              <li>
                {" "}
                <Link
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer  hover:border-b-2 border-red-500 duration-200 ease-in-out hover:text-cyan-400"
                  to={menu.path}
                >
                  {menu.name}
                </Link>
              </li>
            </ul>
          ))}
          {/* <button className="bg-cyan-500 shadow-xl hover:bg-cyan-700 text-white font-bold py-1 px-6 rounded">
              Sign-up
            </button> */}
        </div>
        {/* mbl */}
        <div className="sm:hidden " onClick={() => setIsopen(!isopen)}>
          <TfiMenu size={30} />
          {isopen && (
            <div className="absolute top-20   right-0 h-screen bg-gray-100  md:hidden flex flex-col items-end  w-full px-14  py-24">
              <ul className="flex flex-col  space-y-12 justify-center items-end">
                {Menues.map((menu, index) => (
                  <li
                    key={index}
                    className="hover:text-cyan-400 hover:border-b-2 border-red-500 duration-200 ease-in-out text-xl cursor-pointer"
                  >
                    <Link
                      spy={true}
                      smooth={true}
                      duration={700}
                      to={menu.path}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
                <li className="bg-cyan-500 hover:bg-cyan-700 text-white text-2xl font-bold py-1 px-6 rounded">
                  <Link spy={true} smooth={true} duration={700} to="Contact">
                    Sign-Up
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* mbl */}
      </motion.div>
    </>
  );
}

export default Navbar;
