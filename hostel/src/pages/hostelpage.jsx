import React, { useState, useEffect } from 'react';
import { hosteldata } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const Hostelpage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(hosteldata);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = hosteldata.slice();

    // Filter by category
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.occupancy));
    }

    // Filter by search term
    if (searchTerm) {
      productsCopy = productsCopy.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, searchTerm]);

  return (
    <div className='bg-[url("/pie.jpg")] bg-fixed'>
<div className="flex-col  ">
  {/* Left side: Text "All Hostel" */}
  <div className='ml-72 mb-5 '>
    <button className="font-Spacemono text-xl md:block relative border-2 font-extrabold py-3 px-10 bg-red-600 text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 border-solid border-black shadow-[-7px_7px_0px_#000000]">
      All Hostel
    </button>
  </div>

  {/* Centered: Search Bar */}
  <div className="inline-flex items-center rounded-md justify-center ml-96 border-black px-5 py-2 my-5 mx-3 w-3/4 sm:w-1/2  ">
    <input
      type="text"
      placeholder="Search for hostels..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full max-h-16 border-solid border-2  border-black shadow-[-7px_7px_0px_#000000]  py-3  pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <img
      src="search.png"
      alt="Search"
      className=" w-15 h-12 ml-8 border-black border-2 shadow-[-7px_7px_0px_#000000]"
    />
  </div>
</div>





      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
        {/* Filter Options */}
        <div className="min-w-60 mt-10">
          <p
            className="my-2 text-xl ml-6 mr-2 font-Spacemono shadow-[-7px_7px_0px_#000000] border-black border-2 cursor-pointer gap-2"
            onClick={() => setShowFilter(!showFilter)}
          >
            FILTERS
          </p>
          {/* Category filter */}
          <div
            className={`shadow-[-7px_7px_0px_#000000] border-black border-2 ml-5 pl-5 py-3 mt-6 ${
              showFilter ? '' : 'hidden'
            } sm:block`}
          >
            <p className="mb-3 text-xl font-Spacemono">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  className="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  value="single"
                  onChange={toggleCategory}
                />
                Single
              </p>
              <p className="flex gap-2">
                <input
                  className="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  value="double"
                  onChange={toggleCategory}
                />
                Double
              </p>
              <p className="flex gap-2">
                <input
                  className="w-4 h-4 text-blue-600 font-Spacemono bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                  value="triple"
                  onChange={toggleCategory}
                />
                Triple
              </p>
            </div>
          </div>
        </div>
        {/* Product List */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((hostel, index) => (
              <div key={hostel._id} className="ml-5 mt-10 p-4 rounded  hover:shadow-lg transition-shadow border-black  border-2 mr-10 mb-10 shadow-[-7px_7px_0px_#000000]" >
                <img src={hostel.image} className="w-full border-2 border-black shadow-2xl h-48 font-Spacemono object-cover mb-4" />
                <div className=''>
                  <h2 className="text-lg font-Spacemono mb-5">{hostel.title}</h2>
                  <p className="text-gray-800  font-Spacemono">{hostel.price}</p>
                  <NavLink to={`/Hostel/${hostel._id}`}>
                      <button className='hidden font-Spacemono  md:block relative border-2  font-extrabold py-1 px-2 m-auto mt-3   text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[""] hover:text-white before:hover:scale-y-100  border-solid border-black shadow-[-7px_7px_0px_#000000]'>View Details</button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostelpage;
