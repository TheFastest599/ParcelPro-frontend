import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Search } from 'lucide-react';

function TrackingPortal({ requests }) {
  const [trackingId, setTrackingId] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    const foundPackage = requests.find(req => req.trackingId === trackingId);
    if (foundPackage) {
      setTrackingInfo(foundPackage);
    } else {
      alert('Package not found.   Please check your tracking ID.');
      setTrackingInfo(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Track Your Package
      </h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col sm:flex-row">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={e => setTrackingId(e.target.value)}
            className="flex-grow shadow appearance-none border rounded-l w-full sm:w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 sm:mb-0"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline flex items-center justify-center"
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
              <strong>From:</strong> {trackingInfo.pickupAddress}
            </p>
            <p className="text-gray-700">
              <strong>To:</strong> {trackingInfo.deliveryAddress}
            </p>
            <p className="text-gray-700">
              <strong>Package Details:</strong> {trackingInfo.packageDetails}
            </p>
            <p className="text-gray-700">
              <strong>Last Updated:</strong>{' '}
              {new Date(trackingInfo.createdAt).toLocaleString()}
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

export default TrackingPortal;
