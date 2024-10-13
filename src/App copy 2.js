import React, { useState } from 'react';
import './App.css';
import './output.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from 'react-router-dom';
import {
  Package,
  Truck,
  CheckCircle,
  PlusCircle,
  Search,
  Heart,
} from 'lucide-react';

// Utility function to generate a random tracking ID
const generateTrackingId = () => {
  return 'TRK' + Math.random().toString(36).substr(2, 9).toUpperCase();
};

// Main App Component
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-6 py-3">
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-800 hover:text-blue-600 transition duration-300"
                >
                  <Package className="inline-block mr-2" size={20} />
                  Courier Management System
                </Link>
              </li>
              <li>
                <Link
                  to="/customer"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  Customer Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  Admin Portal
                </Link>
              </li>
              <li>
                <Link
                  to="/track"
                  className="text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  Track Package
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-6 py-8">
          <Routes>
            <Route path="/customer" element={<CustomerPortal />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="/track" element={<TrackingPortal />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; 2023 Courier Management System. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

// Home Component
function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Courier Management System
      </h1>
      <p className="text-xl mb-8">Choose a portal to get started:</p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/customer"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Customer Portal
        </Link>
        <Link
          to="/admin"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Admin Portal
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

// Customer Portal Component
function CustomerPortal() {
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
      <h1 className="text-3xl font-bold mb-6 text-center">
        Request Courier Service
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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

// Admin Portal Component
function AdminPortal() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      pickupAddress: '123 Main St, City A',
      deliveryAddress: '456 Elm St, City B',
      packageDetails: 'Small box, 2kg',
      status: 'Pending',
      trackingId: 'TRK001',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      pickupAddress: '789 Oak St, City C',
      deliveryAddress: '101 Pine St, City D',
      packageDetails: 'Large parcel, 10kg',
      status: 'In Transit',
      trackingId: 'TRK002',
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setRequests(
      requests.map(req => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Portal</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Courier Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Package Details
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map(request => (
                <tr key={request.id}>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {request.name}
                        </p>
                        <p className="text-gray-600 whitespace-no-wrap">
                          {request.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {request.packageDetails}
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      From: {request.pickupAddress}
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      To: {request.deliveryAddress}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <span
                      className={`relative inline-block px-3 py-1 font-semibold text-${
                        request.status === 'Delivered'
                          ? 'green'
                          : request.status === 'In Transit'
                          ? 'blue'
                          : 'yellow'
                      }-900 leading-tight`}
                    >
                      <span
                        aria-hidden
                        className={`absolute inset-0 bg-${
                          request.status === 'Delivered'
                            ? 'green'
                            : request.status === 'In Transit'
                            ? 'blue'
                            : 'yellow'
                        }-200 opacity-50 rounded-full`}
                      ></span>
                      <span className="relative">
                        {request.status === 'Delivered' && (
                          <CheckCircle
                            className="inline-block mr-1"
                            size={16}
                          />
                        )}
                        {request.status === 'In Transit' && (
                          <Truck className="inline-block mr-1" size={16} />
                        )}
                        {request.status === 'Pending' && (
                          <Package className="inline-block mr-1" size={16} />
                        )}
                        {request.status}
                      </span>
                    </span>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <select
                      value={request.status}
                      onChange={e =>
                        handleStatusChange(request.id, e.target.value)
                      }
                      className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Transit">In Transit</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                    <p className="mt-2 text-gray-600">
                      Tracking ID: {request.trackingId}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Tracking Portal Component
function TrackingPortal() {
  const [trackingId, setTrackingId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    // In a real application, this would fetch tracking info from a server
    const mockTrackingInfo = {
      trackingId,
      status: ['Pending', 'In Transit', 'Delivered'][
        Math.floor(Math.random() * 3)
      ],
      location: 'City XYZ',
      lastUpdate: new Date().toLocaleString(),
    };
    setTrackingInfo(mockTrackingInfo);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Track Your Package
      </h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={e => setTrackingId(e.target.value)}
            className="flex-grow shadow appearance-none border rounded-l w-full py-2  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline flex items-center"
          >
            <Search className="mr-2" size={20} />
            Track
          </button>
        </div>
      </form>

      {trackingInfo && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Tracking Information</h2>
          <div className="mb-4">
            <p className="text-gray-700">
              <strong>Tracking ID:</strong> {trackingInfo.trackingId}
            </p>
            <p className="text-gray-700">
              <strong>Status:</strong>
              <span
                className={`ml-2 inline-block px-2 py-1 text-sm font-semibold rounded-full ${
                  trackingInfo.status === 'Delivered'
                    ? 'bg-green-200 text-green-800'
                    : trackingInfo.status === 'In Transit'
                    ? 'bg-blue-200 text-blue-800'
                    : 'bg-yellow-200 text-yellow-800'
                }`}
              >
                {trackingInfo.status === 'Delivered' && (
                  <CheckCircle className="inline-block mr-1" size={16} />
                )}
                {trackingInfo.status === 'In Transit' && (
                  <Truck className="inline-block mr-1" size={16} />
                )}
                {trackingInfo.status === 'Pending' && (
                  <Package className="inline-block mr-1" size={16} />
                )}
                {trackingInfo.status}
              </span>
            </p>
            <p className="text-gray-700">
              <strong>Current Location:</strong> {trackingInfo.location}
            </p>
            <p className="text-gray-700">
              <strong>Last Updated:</strong> {trackingInfo.lastUpdate}
            </p>
          </div>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  {trackingInfo.status === 'Delivered'
                    ? '100%'
                    : trackingInfo.status === 'In Transit'
                    ? '66%'
                    : '33%'}
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{
                  width:
                    trackingInfo.status === 'Delivered'
                      ? '100%'
                      : trackingInfo.status === 'In Transit'
                      ? '66%'
                      : '33%',
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
