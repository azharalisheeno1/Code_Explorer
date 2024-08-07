import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import React from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
function Footer() {
  const Menues = [
    { path: "home", name: "Home" },
    { path: "service", name: "Services" },
    { path: "about", name: "About Us" },
    { path: "team", name: "Our Team" },
    { path: "contact", name: "Contact Us" },
  ];
  return (
 <>
<div className='bg-gray-100  p-6 md:p-12 space-y-6 md:space-y-0'>
<motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }} className=' md:flex justify-between  '>
      <div className='md:w-1/4 w-full'>
        <h1 className='text-xl font-bold mb-2'>The Coding Journey</h1>
        <p className='text-gray-700 text-justify'>The journey of a Code Explorer is filled with curiosity and innovation, navigating through the vast landscapes of programming languages and frameworks. Each line of code is a step toward solving complex problems, transforming ideas into functional and dynamic applications.</p>
      </div>
      <div className='flex md:gap-40  md:w-1/3  justify-center w-full   rounded-md'>
        <div className='w-full '>
          <h1 className='text-lg font-semibold mb-2'>Course</h1>
          <p className='text-lg' >Frontend Development</p>
          <p className='my-3 text-lg'>Reactjs Development</p>
          <p className='text-lg' >Next.Js  Development</p>
        </div>
        <div className='w-1/2'>
          <h1 className='text-lg font-semibold mb-2'>Links</h1>
          
          {Menues.map((menu,index)=> <Link  smooth={true} offset={50} duration={500} 
           className=' cursor-pointer   duration-200 ease-in-out hover:text-cyan-400 block mb-1' key={index} to={menu.path} >{menu.name}</Link>)}
          
         
        </div>
      </div>
      <div className='md:w-1/4 w-full'>
        <h1 className='text-xl font-bold mb-2'>Get in Touch</h1>
        <form action="" className='space-y-4'>
          <input type="email" className='border-2 pl-5 py-3 w-full rounded-md' placeholder="ENter Your Email " />
         
          <div className="flex space-x-6 py-3">
              
                <FaWhatsapp size={30} className="cursor-pointer text-green-500 hover:scale-125 duration-200" />
              
                <FaInstagram size={30} className="cursor-pointer text-orange-400 hover:scale-125 duration-200" />
              
              
                <TbWorldWww size={30} className="cursor-pointer text-blue-500 hover:scale-125 duration-200" />
              
                <FaYoutube size={30} className="cursor-pointer text-red-500 hover:scale-125 duration-200" />
              
            </div>
        </form>
      </div>
    </motion.div>
    </div>
    </>
  )
}

export default Footer