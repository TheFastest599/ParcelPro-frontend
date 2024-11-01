import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import globalContext from '../context/global/globalContext';

function Home() {
  const gcontext = useContext(globalContext);
  const { isCustomerLoggedIn, isAdminLoggedIn } = gcontext;
  return (
    <div className="text-center py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        Welcome to Courier Management System
      </h1>
      <p className="text-lg sm:text-xl mb-8">Choose a portal to get started:</p>
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
  );
}

export default Home;
