import React from 'react';

const Footer = () => {
  return (
    <div className=' bg-black  pt-10 font-Spacemono px-2  md:px-20 lg:px-32 w-full overflow-hidden' id='Footer'>
      <div className=' flex flex-col md:flex-row justify-between items-center'>
        <div className='w-full flex flex-col-2 md:w-1/3 mb-8 md:mb-0'>
          <img src='/blackhd.png' className='max-h-40' alt='Logo' />
          <p className='text-white max-w-100'>
            HostelDekho is your go-to platform for finding hostels and PGs near various Universities. We offer verified listings and a hassle-free search experience for students.
          </p>
        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
          <h3 className='text-white font-Spacemono text-2xl mb-4'>Company</h3>
          <ul className='flex flex-col gap-2 text-white'>
            <li><a href='#Header' className=''>Home</a></li>
            <li><a href='#About' className=''>About</a></li>
            <li><a href='#Contact' className=''>Contact Us</a></li>
            <li><a href='#Header' className=''>Privacy Policy</a></li>
          </ul>
        </div>
        <div className='w-full md:w-1/3 '>
          <h3 className='text-white font-Spacemono text-2xl mb-4'>Get In Touch</h3>
          <p className='text-white mb-4 max-w-100'>
          I'm always open to new opportunities and collaboration. Feel free to reach out!
          </p>
          <div>
            <p className='text-white font-Spacemono'> Satwik Dubey</p>
            <a href="https://www.linkedin.com/in/satwikdubey10" target="_blank" class="inline-flex items-center mt-2 px-1 py-2 bg-black text-white  hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2 " viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.25 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.805-1.75-1.732s.784-1.732 1.75-1.732 1.75.805 1.75 1.732-.784 1.732-1.75 1.732zm13.25 10.268h-3v-4.619c0-1.104-.896-2-2-2s-2 .896-2 2v4.619h-3v-9h3v1.092c.703-.85 1.733-1.092 3-1.092 2.209 0 4 1.791 4 4v5z"/>
              </svg>
              LinkedIn
            </a>

          
          </div>

        </div>

      </div>
      <div className='border-t border-white py-4 mt-10 text-center text-white shadow-[-7px_7px_0px_#FFFFFF]'>
             <p className='text-white '>&copy; 2024 HostelDekho. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;