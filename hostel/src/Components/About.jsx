import React from 'react'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <motion.div initial={{opacity:0,x:300}} transition={{duration:2}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className='flex font-Spacemono flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden ' id='About'>
        <h1 className='text-2xl sm:text-4xl my-10 font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>HostelDekho</span></h1>
        <p className='text-gray-700 max-w text-2xl text-center mb-8'>One Stop Solution for finding Hostels and PGs near Universiies</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            {/* <img src='/aboutpic.jpg' alt='' className='w-full sm:w-1/2 max-w-lg  border-solid border-2 hover: border-black shadow-[-7px_7px_0px_#000000]'/> */}
            <img src='/aboutpic.jpg' alt='' className='w-full sm:w-1/2 max-w-lg  border-black border-3 transition-shadow duration-400  hover:shadow-[-7px_7px_0px_#000000]'/>
            <div className='flex flex-col items-center md:items-start mt-10 text-fray-600'>
                <div className='grid grid-cols-3 gap-6 my-20 md:gap-10 w-full 2xl pr-28'>
                    <div>
                        <p className='font-Spacemono text-4xl text-gray-800 font-medium'>10+</p>
                        <p>Hostels</p>
                    </div>
                    <div>
                        <p className='font-Spacemono text-4xl text-gray-800 font-medium'>1</p>
                        <p>University</p>
                    </div>
                    <div>
                        <p className='font-Spacemono text-4xl text-gray-800 font-medium'>20+</p>
                        <p>Students</p>
                    </div>
                </div>
                <p className='text-xl  max-w'>Our platform is built to simplify your search with verified listings, detailed insights, and smart tools to ensure you find a place that feels like home. Whether you’re prioritizing budget, amenities, or location, HostelDekho has got your back.</p>
                <button className='hidden md:block relative  border-2 mt-9 font-extrabold py-2.5 px-10 bg-red-600  text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[""] hover:text-white before:hover:scale-y-100  border-solid border-black shadow-[-7px_7px_0px_#000000]'>Learn more</button>
            </div>
        </div >
    </motion.div>
  )
}

export default About