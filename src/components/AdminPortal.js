import React from 'react';
import { Package, Truck, CheckCircle } from 'lucide-react';

function AdminPortal({ requests, setRequests }) {
  const handleStatusChange = (id, newStatus) => {
    setRequests(
      requests.map(req => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Admin Portal
      </h1>
      <div className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
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

export default AdminPortal;
