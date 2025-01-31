import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase'; // Ensure the correct path to firebase initialization

const auth = getAuth(app); // Initialize Firebase Auth

const Login = ({ setShowModal }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For Sign Up: store name

  // Handle form submission for sign-in and sign-up
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignIn) {
        // Sign In with email and password
        await signInWithEmailAndPassword(auth, email, password);
        alert('Sign In Successful');
      } else {
        // Sign Up with email, password, and name
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Sign Up Successful');
      }
      setShowModal(false); // Close the modal after successful action
    } catch (error) {
      alert(error.message); // Display error message if any
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isSignIn && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-black  text-white font-bold py-2 px-2 mt-2 rounded focus:outline-none focus:shadow-outline"
          >
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
          <a
            href="#"
            onClick={() => setIsSignIn(!isSignIn)}
            className="inline-block align-baseline ml-10 font-bold text-sm text-black hover:text-blue-800"
          >
            {isSignIn ? 'Create an account' : 'Already have an account? Sign In'}
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
