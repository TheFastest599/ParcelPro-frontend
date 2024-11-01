import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Package, Menu, X } from 'lucide-react';
import globalContext from '../context/global/globalContext';

function Navbar() {
  const gcontext = useContext(globalContext);
  const { isCustomerLoggedIn, isAdminLoggedIn, isMenuOpen, setIsMenuOpen } =
    gcontext;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="container mx-auto px-4 py-3">
      <div className="flex justify-between items-center sticky top-0">
        <Link
          to="/"
          className="text-gray-800 hover:text-blue-600 transition duration-300 flex items-center"
        >
          <Package className="inline-block mr-2" size={20} />
          <span className="font-bold">ParcelPro</span>
        </Link>
        <div className="hidden sm:flex space-x-4">
          <Link
            to={isCustomerLoggedIn ? '/customer' : '/customer/login'}
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Customer
          </Link>
          <Link
            to={isAdminLoggedIn ? '/company' : '/company/login'}
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Company
          </Link>
          <Link
            to="/track"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Track
          </Link>
        </div>
        <button onClick={toggleMenu} className="sm:hidden">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="mt-4 sm:hidden">
          <Link
            to={isCustomerLoggedIn ? '/customer' : '/customer/login'}
            className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Customer Portal
          </Link>
          <Link
            to={isAdminLoggedIn ? '/company' : '/company/login'}
            className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Company Portal
          </Link>
          <Link
            to="/track"
            className="block py-2 text-gray-600 hover:text-blue-600 transition duration-300"
          >
            Track Package
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
