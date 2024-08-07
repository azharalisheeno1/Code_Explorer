import React from 'react'
import pic1 from '../assets/images/ab.png'
import pic2 from '../assets/images/2.png'
import pic3 from '../assets/images/3.png'
import { motion } from 'framer-motion'
function Team() {

  const Persons=[
    {id:1,name:"Azhar Ali Sheeno",Role:"Front-end Developer",Desc:"Azhar Ali is an expert in frontend , with over 2 years of experience.",img:pic1},
    {id:2,name:"Jane Smith",Role:"UI/UX Designer",Desc:"Jane is a creative UI/UX designer who crafts visually appealing and user-friendly interface.",img:pic2},
    {id:3,name:"Alex Johnson",Role:"Project Manager",Desc:"Azhar Ali is an expert in frontend , with over 2 years of experience.",img:pic3},
  ]
  
  return (
    <>

<div id='team' className="w-11/12 mx-auto px-4 sm:px-10 py-14">
        <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-medium w-fit mx-auto border-b-2 border-red-400  hover:
          hover:text-cyan-500">Our Team </h2>
           
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
           {Persons.map((person)=>
           <motion.div  initial={{ opacity: 0, scale: 0.5 }}
           
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration:1, ease: "easeInOut" }} key={person.id} className="bg-white shadow-md rounded-lg overflow-hidden">
           <img className="w-full h-80 object-cover bg-center object-top " src={person.img} alt="Team Member 1" />
           <div className="p-6">
               <h2 className="text-2xl font-bold mb-2">{person.name}</h2>
               <p className="text-gray-700 mb-4">{person.Role}</p>
               <p className="text-gray-600">{person.Desc}</p>
           </div>
       </motion.div>
          )}
           
            

     
           
      
        </div>
    </div>




    
    
    </>
  )
}

export default Team