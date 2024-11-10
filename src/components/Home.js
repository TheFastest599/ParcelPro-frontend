import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import globalContext from '../context/global/globalContext';
import heroImage from '../assests/image.png'; // Make sure to replace this with the actual path to your image

function Home() {
  const gcontext = useContext(globalContext);
  const { isCustomerLoggedIn, isAdminLoggedIn } = gcontext;
  return (
    <div className="text-center py-8">
      <div className="relative ">
        <img
          src={heroImage}
          alt="Hero"
          className="w-full max-h-80 object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2">
            ParcelPro
          </h1>
          <p className="text-xl sm:text-2xl text-white">
            Your Trusted Courier Management System
          </p>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-lg sm:text-xl mb-8">
          Choose a portal to get started:
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to={isCustomerLoggedIn ? '/customer' : '/customer/login'}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Customer Portal
          </Link>
          <Link
            to={isAdminLoggedIn ? '/company' : '/company/login'}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Company Portal
          </Link>
          <Link
            to="/track"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Track Package
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
