import React from 'react';
import { useParams } from 'react-router-dom';
import { hosteldata } from '../assets/assets';

import { useForm } from 'react-hook-form';

const Hostelinfo = () => {
  const { id } = useParams();
  const hostel = hosteldata.find((hostel) => hostel._id === id);

  if (!hostel) {
    return <p className="text-center mt-10">Hostel not found!</p>;
  }
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  

  async function onSubmit(data){
    // api call
    await new Promise((resolve)=>setTimeout(resolve,5000));
    console.log("Submitting the form",data)
  }

  return (
    <div className='bg-[url("/pie.jpg")] bg-fixed'>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Green to blue
        </span>
      </button>
      <div className='ml-10 flex flex-row justify-center '>
        <button className="hidden md:block relative border-2 bg-yellow-400 py-2.5 px-10 text-3xl font-Spacemono text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 border-solid border-black shadow-[-7px_7px_0px_#000000]">
          {hostel.title}
        </button>
      </div>
      {/* End of Dropdown menu */}
      <div className='flex flex-row'>
        <img src={hostel.image} alt={hostel.title} className='h-auto max-w-full mx-auto mt-10 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-black' />
      </div>
      <div className='border-4 font-Spacemono max-w-7xl mt-10 ml-72 border-black border-3 transition-shadow duration-700 hover:shadow-[-7px_7px_0px_#000000] rounded-3xl'>
        <p className='font-Spacemono text-xl text-gray-700 ml-10 mb-10 mt-10 mr-10 text-wrap max-w- px-2'>
          {hostel.desc}
        </p>
      </div>

      <div className='flex justify-center flex-row mb-10 '>
        <div className='border-4 border-black font-Spacemono max-w-lg mt-10 ml-10 mr-5 py-5 border-solid shadow-[-7px_7px_0px_#000000] rounded-3xl'>
          <button className='font-Spacemono mb-5 mr-10 text-2xl font-medium mt-5 ml-12 bg-cyan-500 cursor-default border-solid border-black shadow-[-7px_7px_0px_#000000] border-2 py-2 px-4'>
            Renting Terms
          </button>
          <div className='flex flex-row mt-4'>
            <img src={hostel.Rent} className='w-10 h-9 ml-5 mt-2' alt="Rent Icon" />
            <p className='text-xl ml-3 py-3'>Rent: {hostel.price}</p>
          </div>
          <div className='flex flex-row mt-1'>
            <img src={hostel.Security} className='w-10 h-9 ml-5 mt-2' alt="Security Icon" />
            <p className='text-xl ml-3 py-5'>Security Deposit: {hostel.deposit}</p>
          </div>
          <div className='flex flex-row mt-1'>
            <img src={hostel.Notice} className='w-10 h-9 ml-5 mt-2' alt="Notice Icon" />
            <p className='text-xl ml-3 py-3'>Notice Period: {hostel.period}</p>
          </div>
          <div className='flex flex-row mt-1'>
            <img src={hostel.Electric} className='w-10 h-9 ml-5 mt-2' alt="Electric Icon" />
            <p className='text-xl mr-4 ml-3 py-3'>Electricity Unit: {hostel.Eunit}</p>
          </div>
        </div>
        <div className="border-4 border-black font-Spacemono max-w mt-10 ml-10 mr-5 py-5 border-solid shadow-[-7px_7px_0px_#000000] rounded-3xl">
          <button className="font-Spacemono mb-5 mr-10 text-2xl font-medium mt-5 ml-12 bg-green-400 cursor-default border-solid border-black shadow-[-7px_7px_0px_#000000] border-2 py-2 px-4">
            Amenities
          </button>
          <div className="grid grid-cols-5 gap-5 px-5">
            {/* Gym */}
            <div className="flex flex-col items-center">
              <img src={hostel.a5} alt="Gym" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">Gym</p>
            </div>
            {/* Food */}
            <div className="flex flex-col items-center">
              <img src={hostel.a6} alt="Food" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">Food</p>
            </div>
            {/* Laundry */}
            <div className="flex flex-col items-center">
              <img src={hostel.a7} alt="Laundry" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">Laundry</p>
            </div>
            {/* Wi-Fi */}
            <div className="flex flex-col items-center">
              <img src={hostel.a8} alt="Wi-Fi" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">Wi-Fi</p>
            </div>
            {/* Clean Rooms */}
            <div className="flex flex-col items-center">
              <img src={hostel.a9} alt="Clean Rooms" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">Clean Rooms</p>
            </div>
            {/* Security */}
            <div className="flex flex-col items-center">
              <img src={hostel.a11} alt="Security" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">Security</p>
            </div>
            {/* RO Water */}
            <div className="flex flex-col items-center">
              <img src={hostel.a12} alt="RO Water" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">RO Water</p>
            </div>
            {/* Games */}
            <div className="flex flex-col items-center">
              <img src={hostel.a13} alt="Games" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">Games</p>
            </div>
            {/* Garden Area */}
            <div className="flex flex-col items-center">
              <img src={hostel.a14} alt="Garden Area" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">Garden Area</p>
            </div>
            {/* Swimming Pool */}
            <div className="flex flex-col items-center">
              <img src={hostel.a15} alt="Swimming Pool" className="w-12 h-12 mb-2" />
              <p className="text-lg font-medium text-center">Swimming Pool</p>
            </div>
          </div>
        </div>
      </div>
      {/* Location */}
      <div className='flex flex-row justify-center mr-96  '>
        <div className='flex flex-row mb-10 justify-center '>
          <div className='border-4 border-black font-Spacemono max-w mt-10 -ml-52 mr-10 py-5 border-solid shadow-[-7px_7px_0px_#000000] rounded-3xl'>
            <div>
              <button className='font-Spacemono mb-5 mr-11 text-2xl font-medium mt-5 ml-12 bg-violet-600 cursor-default border-solid border-black shadow-[-7px_7px_0px_#000000] border-2 py-2 px-4'>
                Other Details
              </button>
            </div>
            <div className='ml-10 mt-5 mr-10 flex flex-row'>
              <img src={hostel.map} className='mr-7 h-9' alt="Map Icon" />
              <p className="text-xl text-gray-600 font-Spacemono mb-2">{hostel.location}</p>
            </div>
            <div className='ml-10 mt-10  flex flex-row'>
              <img src={hostel.phonen} className='mr-4 h-9' alt="Map Icon" />
              <p className="text-xl text-gray-600 font-Spacemono mb-2">{hostel.contactno}</p>
            </div>
            <div className='ml-10 mt-12 mr-5  flex flex-row'>
              <img src={hostel.gender} className='mr-4 h-11' alt="Gender Icon" />
              <p className='text-xl text-gray-600 font-Spacemono mb-2'>For Both Boys & Girls</p>
            </div>
            
    
          </div>
        </div>

      </div>


      {/* Headline */}
      <div className='flex flex-row justify-center max-w-screen-xl -ml-24'>
        <button className='font-Spacemono font-se mb-5 text-2xl font-medium mt-5 bg-blue-600 cursor-default border-solid border-black shadow-[-7px_7px_0px_#000000] border-2 py-2 px-4'>
          For Booking  fill the form given below !!
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='font-Spacemono  mb-10 max-w-4xl mx-auto text-gray-700 pt-8 border-4 py-2.5 px-5 mt-10 border-spacing-11 rounded-xl border-black shadow-[-7px_7px_0px_#000000] ml-52'>
    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
            First Name
            <input {...register ('firstname',{required:true})}
                className='w-full border rounded py-3 px-4 mt-2 border-solid border-black shadow-[-7px_7px_0px_#000000]'
                type='text'
                id='first_name'
                name='first_name'
                placeholder='John'
                required
            />
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4'>
            Last Name
            <input {...register ('lastname',{required:true})}
                className='w-full border rounded py-3 px-4 mt-2 border-solid border-black shadow-[-7px_7px_0px_#000000]'
                type='text'
                id='last_name'
                name='last_name'
                placeholder='Doe'
                required
            />
        </div>
        <div className='w-full md:w-1/2 text-left mt-3'>
            Father’s Name
            <input {...register ('fathername',{required:true})}
                className='w-full border rounded py-3 px-4 mt-2 border-solid border-black shadow-[-7px_7px_0px_#000000]'
                type='text'
                id='father_name'
                name='father_name'
                placeholder='Father’s Name'
                required
            />
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4 mt-3'>
            Mother’s Name
            <input {...register ('mothername',{required:true})}
                className='w-full border rounded py-3 px-4 mt-2 border-solid border-black shadow-[-7px_7px_0px_#000000]'
                type='text'
                id='mother_name'
                name='mother_name'
                placeholder='Mother’s Name'
                required
            />
        </div>
        <div className='w-full md:w-1/2 text-left mt-3'>
            Contact Number
            <input {...register ('contact',{required:true})}
                className='w-full border rounded py-3 px-4 mt-2 border-solid border-black shadow-[-7px_7px_0px_#000000]'
                type='tel'
                id='contact_number'
                name='contact_number'
                placeholder='Contact Number'
                required
            />
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4 mt-3'>
            Email ID
            <input {...register ('emailid',{required:true})}
                className='w-full border rounded py-3 px-4 mt-2 border-solid border-black shadow-[-7px_7px_0px_#000000]'
                type='email'
                id='email'
                name='email'
                placeholder='john.doe@company.com'
                required
            />
        </div>
    </div>
    <div className='my-6'>
            <div className='text-left'>
                Gender
                <div className='flex items-center mt-2'>
        <input {...register('gender', { required: true })} type='radio' id='gender_male' value='Male' className='w-4 h-4' />
        <label htmlFor='gender_male' className='ml-2'>Male</label>
        <input {...register('gender', { required: true })} type='radio' id='gender_female' value='Female' className='w-4 h-4 ml-4' />
        <label htmlFor='gender_female' className='ml-2'>Female</label>
    </div>

        </div>
    </div>
    <div className='my-6'>
        <div className='text-left'>
            Occupancy
            <div className='flex items-center mt-2'>
                <input {...register ('single',{required:true})}
                    type='radio'
                    id='occupancy_single'
                    name='occupancy'
                    value='Single'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500'
                    required
                />
                <label htmlFor='occupancy_single' className='ml-2 text-sm font-medium text-gray-700'>
                    Single
                </label>
                <input {...register ('double',{required:true})}
                    type='radio'
                    id='occupancy_double'
                    name='occupancy'
                    value='Double'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 ml-4'
                    required
                />
                <label htmlFor='occupancy_double' className='ml-2 text-sm font-medium text-gray-700'>
                    Double
                </label>
                <input {...register ('triple',{required:true})}
                    type='radio'
                    id='occupancy_triple'
                    name='occupancy'
                    value='Triple'
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 ml-4'
                    required
                />
                <label htmlFor='occupancy_triple' className='ml-2 text-sm font-medium text-gray-700'>
                    Triple
                </label>
            </div>
        </div>
    </div>
    <div className='flex items-start mb-6'>
        <input {...register ('term',{required:true})}
            id='terms'
            type='checkbox'
            value=''
            className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500'
            required
        />
        <label htmlFor='terms' className='ml-2 text-sm font-medium text-gray-700'>
            I agree with the{' '}
            <a href='#' className='text-blue-600 hover:underline'>
                terms and conditions
            </a>.
        </label>
    </div>
    <input 
    type='submit'
    disabled={isSubmitting}
    value={isSubmitting ? "Submitting..." : "Submit"}
    className='text-white bg-blue-700 cursor-pointer hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 shadow-[-7px_7px_0px_#000000]'
/>


</form>
    <div>
       .
    </div>


  
    </div>
  );
};

export default Hostelinfo;
