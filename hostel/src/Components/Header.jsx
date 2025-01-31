import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col  items-center  font-Spacemono justify-evenlybg-center bg-[url("/pie.jpg")] '>
        <div className=' py-5 px-5 md:px-10 lg:px-20'>
            <div className='flex justify-between items-center'>
                <img src='/logoo(1).png' className='h-auto max-w-lg' alt='Stay Logo' />
            </div>
        </div>
    </div>
  )
}

export default Header