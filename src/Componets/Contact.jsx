import React from 'react'
import form from '../assets/images/contactform.png'
import { Field, Form, Formik } from 'formik'
import { motion } from 'framer-motion'
function Contact() {
  return (
    <>
    
    <motion.div  initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 150 }}
        transition={{ duration: 1 }} id='contact' className="sm:flex h-screen   w-11/12 mx-auto py-20 justify-between flex-col-reverse sm:flex-row ">
        
      <div >
        <img src={form} alt="" />
      </div>


      <div className=' sm:w-1/2  '>
      <h2 className="text-2xl sm:text-2xl font-medium w-fit mx-auto border-b-2 border-red-400  hover:
          hover:text-cyan-500">Talk to Us</h2>
       <Formik>
     
       <Form action="" className='p-10'>
        
        <Field type="text" className="border-2 px-5 py-2 w-full rounded-xl" placeholder='username' name="" id="" required />
        
        <Field type="email" className="border-2 px-5 py-2 my-3 w-full rounded-xl" placeholder='username'  required name="" id="" />
        <Field as="textarea" name="" className='border-2 w-full rounded-xl ' rows={10} id=""  required></Field>
        <button className="bg-cyan-500    w-52 shadow-xl hover:bg-cyan-700 text-white font-bold py-2 mt-5 px-6 rounded">Submit </button>
      </Form> 
      </Formik>
      </div>
</motion.div>



    </>
  )
}

export default Contact