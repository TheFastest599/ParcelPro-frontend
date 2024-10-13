import React, { useState } from 'react';
import './App.css';
import './output.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CustomerPortal from './components/CustomerPortal';
import AdminPortal from './components/AdminPortal';
import TrackingPortal from './components/TrackingPortal';
import Spinner from './components/Spinner';
import CustomerLogin from './components/CustomerLogin';
import CustomerSignUp from './components/CustomerSignUp';
import AdminLogin from './components/AdminLogin';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Main App Component
export default function App() {
  const [requests, setRequests] = useState([]);

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
        <header className="bg-white shadow-md">
          {/* Navbar */}
          <Navbar />
        </header>

        <main className="container  mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/customer"
              element={<CustomerPortal setRequests={setRequests} />}
            />
            <Route
              path="/admin"
              element={
                <AdminPortal requests={requests} setRequests={setRequests} />
              }
            />
            <Route
              path="/track"
              element={<TrackingPortal requests={requests} />}
            />
            <Route path="/" element={<Home />} />
            <Route path="/customer/login" element={<CustomerLogin />} />
            <Route path="/customer/signup" element={<CustomerSignUp />} />
            <Route path="/admin/login" element={<AdminLogin />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 ParcelPro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Home Component

// Customer Portal Component

// Admin Portal Component

// Tracking Portal Component