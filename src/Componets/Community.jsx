import React from 'react'
import developers from '../assets/images/dv.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";
function Community() {
  return (
    <>
      
    <div className="sm:flex w-11/12 mx-auto py-10 justify-between flex-col-reverse sm:flex-row px-10 items-center">

      <motion.div  initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 5, x: 0 } } transition={{duration:1}}  className='sm:w-1/2'>
        <h1 className='text-xl sm:text-2xl font-semibold'>Join Our Community to Start your Journey</h1>
        <p className='text-justify py-5'>Our team at Code Explorer is comprised of passionate professionals dedicated to guiding you through your web development journey. With expertise spanning front-end development, UI/UX design, and project management, we are here to support your growth every step of the way. Whether you're a beginner or an advanced learner, our mission is to provide you with the knowledge and tools needed to succeed. Join us and be a part of a community that fosters innovation and excellence. Together, let's build the future of web development.</p>
        <button className="bg-cyan-500 flex mx-auto group sm:mx-0 justify-around items-center gap-3 shadow-xl hover:bg-cyan-700 text-white font-bold py-1 px-6 rounded">
Join Us
  <FaLongArrowAltRight className="transform group-hover:-rotate-45 group-hover:duration-300 group-hover:ease-in-out" size={20} />
</button>
      </motion.div>

        <div className=''>
          <motion.img  initial={{ opacity: 0, x: 50 }}
          transition={{duration:1}}
            whileInView={{ opacity: 1, x: 0 }} src={developers} className='' alt="" />
        </div>
    </div>
    
    
    
    </>
  )
}

export default Community