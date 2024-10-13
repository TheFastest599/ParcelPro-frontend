import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package } from 'lucide-react';

// Utility function to generate a random tracking ID
const generateTrackingId = () => {
  return 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

function CustomerPortal({ setRequests }) {
  const [request, setRequest] = useState({
    name: '',
    email: '',
    pickupAddress: '',
    deliveryAddress: '',
    packageDetails: '',
  });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const trackingId = generateTrackingId();
    const newRequest = {
      ...request,
      id: Date.now(),
      trackingId,
      status: 'Pending',
      createdAt: new Date().toISOString(),
    };
    setRequests(prev => [...prev, newRequest]);
    alert(
      `Your courier service request has been submitted! Your tracking ID is: ${trackingId}`
    );
    setRequest({
      name: '',
      email: '',
      pickupAddress: '',
      deliveryAddress: '',
      packageDetails: '',
    });
    navigate('/track', { state: { trackingId } });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setRequest(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Request Courier Service
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            value={request.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            name="email"
            value={request.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pickupAddress"
          >
            Pickup Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="pickupAddress"
            type="text"
            placeholder="Pickup Address"
            name="pickupAddress"
            value={request.pickupAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="deliveryAddress"
          >
            Delivery Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="deliveryAddress"
            type="text"
            placeholder="Delivery Address"
            name="deliveryAddress"
            value={request.deliveryAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="packageDetails"
          >
            Package Details
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="packageDetails"
            placeholder="Describe your package (size, weight, contents, etc.)"
            name="packageDetails"
            value={request.packageDetails}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
            type="submit"
          >
            <Package className="mr-2" size={20} />
            Request Courier
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomerPortal;
