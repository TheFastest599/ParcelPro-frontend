import React, { useContext, useState } from 'react';
import './App.css';
import './output.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CustomerPortal from './components/CustomerPortal';
import CompanyPortal from './components/CompanyPortal';
import TrackingPortal from './components/TrackingPortal';
import Spinner from './components/Spinner';
import CustomerLogin from './components/CustomerLogin';
import CustomerSignUp from './components/CustomerSignUp';
import CustomerAccount from './components/CustomerAccount';
import CompanyLogin from './components/CompanyLogin';
import CompanySignUp from './components/CompanySignUp';
import CompanyAccount from './components/CompanyAccount';
import globalContext from './context/global/globalContext';

import { PackageState } from './context/packages/packageContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Main App Component
export default function App() {
  const [requests, setRequests] = useState([]);
  const gcontext = useContext(globalContext);
  const { isSticky, isMenuOpen } = gcontext;
  return (
    <Router>
      <Spinner />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-h-screen bg-gray-100 font-poppins">
        <header
          className={`bg-white ${
            isSticky || isMenuOpen
              ? 'sticky top-0 transition-transform transform translate-y-0'
              : 'transition-transform transform -translate-y-full'
          }`}
        >
          {/* Navbar */}
          <Navbar />
        </header>

        <main className="container  mx-auto px-4  ">
          <Routes>
            <Route
              path="/customer"
              element={
                <PackageState>
                  <CustomerPortal
                    requests={requests}
                    setRequests={setRequests}
                  />
                </PackageState>
              }
            />
            <Route
              path="/company"
              element={
                <CompanyPortal requests={requests} setRequests={setRequests} />
              }
            />
            <Route
              path="/track"
              element={
                <PackageState>
                  <TrackingPortal requests={requests} />
                </PackageState>
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/customer/login" element={<CustomerLogin />} />
            <Route path="/customer/signup" element={<CustomerSignUp />} />
            <Route path="/customer/account" element={<CustomerAccount />} />
            <Route path="/company/login" element={<CompanyLogin />} />
            <Route path="/company/signup" element={<CompanySignUp />} />
            <Route path="/company/account" element={<CompanyAccount />} />
          </Routes>
        </main>
      </div>
      <footer className="bg-gray-800 text-white py-4 w-full">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 ParcelPro. All rights reserved.</p>
        </div>
      </footer>
    </Router>
  );
}

// Home Component

// Customer Portal Component

// Admin Portal Component

// Tracking Portal Component
