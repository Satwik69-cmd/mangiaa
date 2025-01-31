import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Hostels from './Components/Hostel';
import Testimonials from './Components/Testimonials';
import Contact from './Components/contact';
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from './firebase';
import { Routes, Route } from 'react-router-dom';
import Hostelpage from './pages/hostelpage'; // Ensure proper casing here
import Header from './Components/header';
import Hostelinfo from './pages/Hostelinfo';


const db = getDatabase(app);

const App = () => {
  const putD = () => {
    set(ref(db, "users/satwik"), {
      id: 1,
      name: "Satwik",
      age: 21,
    });
  };

  return (
    <div>
    
      <Header/>
       <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path="/Hostel" element={<Hostelpage />} /> {/* Proper casing */}
        <Route path='/Hostel/:id' element={<Hostelinfo />} />
    

      </Routes>
      <Footer />
    </div>
  );
};

export default App;
