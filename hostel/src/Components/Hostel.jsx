import React, { useEffect, useState } from 'react'
import { assets,hosteldata } from '../assets/assets'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'

const Hostel = () => {

    const[currentIndex,setcurrentIndex]=useState(0);
    const [cardstoShow,setcardstoShow]=useState(1);
    
    const nextHostel=() =>{
        setcurrentIndex((prevIndex)=>(prevIndex+1)% hosteldata.length)
    }
    const prevHostel=() =>{
        setcurrentIndex((prevIndex)=>prevIndex === 0 ? hosteldata.length-1 : prevIndex-1)
    }

    useEffect(()=>{
        const updateCardsToShow=()=>{
            if(window.innerWidth>=1024){
                setcardstoShow(hosteldata.length);
            }else{
                setcardstoShow(1)
            }
        };
            updateCardsToShow();

            window.addEventListener('resize',updateCardsToShow);
            return ()=>window.removeEventListener('resize',updateCardsToShow);
        
    },[])

  return (
  

    <motion.div initial={{opacity:0,x:-200}} transition={{duration:1.5}} whileInView={{opacity:1,x:0}} viewport={{once:true}} className='container  mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden  ' id='Hostel'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center font-Spacemono'>Hostels</h1>
        <p className='font-Spacemono text-2xl text-center text-black mb-8 max-w-100 mx-auto'>
          HostelDekho provides a curated list of the best hostels and PGs near  Universities, offering a variety of options that fit every student’s needs.
        </p>
        {/* Slider buttons */}
        <div className='flex justify-end items-center mb-8'>
          <button onClick={prevHostel} className='p-3 mr-2 hidden md:block relative border-2 mt-9 bg-blue-500 border-black border-3 transition-shadow duration-400 hover:shadow-[-7px_7px_0px_#000000]' aria-label='Previous Hostel'>
            <img src='/Left-Arrow-01.svg' alt='Previous' />
          </button>
          <button onClick={nextHostel} className='p-3 mr-2 hidden md:block relative bg-blue-500 border-2 mt-9 border-black border-3 transition-shadow duration-400 hover:shadow-[-7px_7px_0px_#000000]' aria-label='Next Hostel'>
            <img src='/Right-Arrow-01.svg' alt='Next' />
          </button>
        </div>
        {/* Project Slider container */}
        <div className='overflow-hidden'>
          <div className='flex gap-8 transition-transform duration-500 ease-in-out' 
            style={{ transform: `translateX(-${(currentIndex * 100) / cardstoShow}%)` }}>
            {hosteldata.map((hostel_s, index) => (
              <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 border-solid border-black border-2'>
                <img src={hostel_s.image} alt={hostel_s.title} className='w-full h-auto mb-14' />
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                  <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-[-7px_7px_0px_#000000] border-black border-2'>
                    <h2 className='text-xl max-w font-Spacemono text-black'>
                      {hostel_s.title}
                    </h2>
                    <p className='text-black font-Spacemono text-m'>
                      {hostel_s.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='items-center justify-self-center'>
          <NavLink to='/Hostel'>
            <button className='hidden font-Spacemono  text-xl md:block relative border-2 mt-9 font-extrabold py-3 px-10 bg-red-600  text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[""] hover:text-white before:hover:scale-y-100  border-solid border-black shadow-[-7px_7px_0px_#000000]'>See More</button>
          </NavLink>
           
        </div>
    </motion.div>
  )
}

export default Hostel