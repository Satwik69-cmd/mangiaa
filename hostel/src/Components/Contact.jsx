import React from 'react'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <motion.div initial={{opacity:0,x:-200}} transition={{duration:1.5}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden  ' id='#Contact'>
        <h1 className='text-2xl font-Spacemono sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 inder font-light'>With Us</span></h1>
        <p className='font-Spacemono text-2xl text-center text-black mb-8 max-w-90 mx-auto'>
        Feel free to reach out to us through the form below, email, or phone. We’d love to hear from you and make your hostel-hunting experience even smoother.
        </p>
        <form className=' font-Spacemono max-w-2xl mx-auto text-gray-700 pt-8 border-2 py-2.5 px-5 mt-10 border-solid border-black shadow-[-7px_7px_0px_#000000]' >
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left '>
                    Your Name
                    <input className='w-full border rounded py-3 px-4 mt-2  border-solid border-black shadow-[-7px_7px_0px_#000000]' type='text' name='Name' placeholder='Your Name' required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='w-full border border-black rounded py-3 px-4 mt-2  border-solid  shadow-[-7px_7px_0px_#000000]' type='email' name='Email' placeholder='Your Email' required/>
                </div>
            </div>
            <div className='my-6 text-left'>
               Your Feedback 
               <textarea className='w-full border  rounded py-3 px-4 mt-2 resize-none  border-solid border-black shadow-[-7px_7px_0px_#000000]' name='Message' placeholder='Your Feedback'  required/> 
            </div>
        </form>
        <div className='flex justify-center items-center'>
            <button className='hidden  font-Spacemono md:block  border-2 mt-10 font-extrabold py-2 px-12  text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[""]  before:hover:scale-y-100  border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                Send Feedback
            </button>
        </div>
    </motion.div>
  )
}

export default Contact