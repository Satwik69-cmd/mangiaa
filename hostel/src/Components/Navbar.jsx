import React from 'react';
import {motion} from "framer-motion"
import Login from './login';
import { useState } from 'react';
import About from './About';
import Hostel from './Hostel';
import Contact from './contact';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    
    <div className='flex flex-col items-center font-Spacemono bg-inherit  bg-[url("/pie.jpg")]  bg-fixed bg-opacity-10 '>
        
      <ul className=' md:px-flex lg:px-32 hidden cursor-pointer sm:flex gap-20  text-xl mt-11 text-black rounded-sm'>
        <li className='flex flex-col items-center gap-1'>
          <button className='hidden md:block relative  border-2 bg-red-500 font-extrabold  py-2.5 px-10 text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[""] hover:text-white before:hover:scale-x-100  border-solid border-black shadow-[-7px_7px_0px_#000000]'>
            <a>Home</a>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
          </button>
        </li>
        <li>
          <button className="hidden md:block relative border-2  bg-blue-500  py-2.5 px-10  font-extrabold text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100  border-solid border-black shadow-[-7px_7px_0px_#000000]">
            <a href='#About'>About</a>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
          </button>
        </li>
        <li>
          <button className='hidden md:block relative border-2  bg-green-400  font-extrabold py-2.5 px-10 text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[""] hover:text-white before:hover:scale-x-100  border-solid border-black shadow-[-7px_7px_0px_#000000]'>
            <a href='#Hostel'>Hostel</a>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
          </button>
        </li>
        <li>
          <button className="hidden md:block relative border-2 font-extrabold py-2.5 px-10 bg-yellow-300 text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 border-solid border-black shadow-[-7px_7px_0px_#000000]">
            <a href='#Testimonials'>Testimonials</a>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
          </button>
        </li>
        <li>
            <button onClick={()=>setShowModal(true)} className="hidden md:block absolute right-0 mt-2 top-1 mr-5 border-2 font-extrabold py-2.5 px-10 bg-black text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 border-solid border-black shadow-[-7px_7px_0px_#000000]">
                <a>SignUp</a>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden' />
            </button>
        </li>
        <img  src='/menu.png' className='md:hidden mx-auto px-10' alt='Menu Icon' />
      </ul>
      <div className='backfrop-blur-sm'>
      {showModal && (
            <div
              className="fixed inset-0 bg-black bg-opacity-45  flex justify-center items-center"
              onClick={() => setShowModal(false)} // Closes modal on backdrop click
            >
              <div
                className="bg-white p-8 rounded shadow-lg relative w-96"
                onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicked inside
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 border-solid border-2 text-black border-black shadow-[-7px_7px_0px_#000000]"
                >
                  <img src='/square-x.png'/>
                </button>
                <Login /> {/* Render the Login component */}
              </div>
            </div>
          )}
      </div>



      {/* Mobile menu */}
      <div className='md:hidden fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all'>
        <div>
          <img src='/close.png' className='w-6 bg-black' alt='Close Icon' />
        </div>
      </div>
      <motion.div initial={{opacity:0,y:100}} transition={{duration:1.5}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='container text-center my-20 py-4 px-3 md:px-20 lg:px-32 text-black font-Spacemono '>
          <h2 className=' sm:text-6xl md:text-[82px] inline-block font-Spacemono  pt-6 '>HostelDekho – Ghar Jaisa Stay, Bina Tension Ke</h2>
          <div className='space-x-6 mt-20' >
            <a className='relative border-2  bg-transparent text-xl font-semibold py-2.5 px-10 bg-purple-600  text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[""] hover:text-white before:hover:scale-y-100  border-solid border-black shadow-[-7px_7px_0px_#000000]' href='#Contact'>Contact Us</a>

          </div>
          
      </motion.div>
        <About/>
        <Hostel/>
        <Contact/>
    </div>
  );
};

export default Navbar;