import React from 'react'
import { testimonialdata } from '../assets/assets'
import {motion} from 'framer-motion'
const Testimonials = () => {
  return (
    <motion.div initial={{opacity:0,x:200}} transition={{duration:1.5}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className=' font-Spacemono container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center font-Spacemono'>Student <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='font-Spacemono text-2xl text-center text-black mb-8 max-w-100 mx-auto'>Hear How We Made Hostel Hunting Easy </p>
        <div className='flex flex-wrap justify-center gap-8'>
          {testimonialdata.map((Testimonial,index)=>(
            <div key={index} className=' cursor-pointer max-w-[540px] rounded px-5 py-12 text-center border-solid  border-black border-2 shadow-[-7px_7px_0px_#000000]'>
              <img  className='w-20 h-20 rounded-full mx-auto mb-4 border-solid border-black border-2 shadow-[-7px_7px_0px_#000000]' src={Testimonial.image} />
              <h2 className='text-2xl font-Spacemono text-black'>{Testimonial.name}</h2>
              <p className='text-gray-500 mb-4 text-sm'>{Testimonial.title}</p>
              <div className='flex justify-center gap-1 text-black mb-4'>
                {Array.from({length:Testimonial.rating},(item,index)=>(
                  <img  key={index} src='/star2.png'/>
                ))}
              </div>
              <p className='mx-auto text-xl'>{Testimonial.text}</p>
            </div>
          ))}
        </div>
    </motion.div>
  )
}

export default Testimonials