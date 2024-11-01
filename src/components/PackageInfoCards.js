import React, { useState, useContext } from 'react';
import StatusBadge from './StatusBadge';
import PackageModal from './PackageModal';
import globalContext from '../context/global/globalContext';
import { Link } from 'lucide-react';
function PackageInfoCards({ packages, addJob = null, title = 'Packages' }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const gcontext = useContext(globalContext);
  const { notify } = gcontext;

  const openModal = pkg => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const copyTrackingLinkToClipboard = async trackID => {
    const hostAddress = window.location.host;
    const trackingLink = `${hostAddress}/track?trackid=${trackID}`;

    try {
      await navigator.clipboard.writeText(trackingLink);
      notify('Tracking link copied to clipboard', 'success');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {packages
          .slice()
          .reverse()
          .map(pkg => (
            <div
              key={pkg.trackID}
              className="p-6 bg-white shadow-lg rounded-lg border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex  items-center">
                  <p className="text-gray-700 font-semibold">
                    <strong>Track ID:</strong> {pkg.trackID}
                  </p>
                  <Link
                    onClick={() => {
                      copyTrackingLinkToClipboard(pkg.trackID);
                    }}
                    className="size-6 mx-2 bg-gray-100 rounded-md p-1 transition duration-300 ease-in-out transform hover:bg-gray-300 hover:scale-105 cursor-pointer"
                  />
                </div>
                <StatusBadge status={pkg.status} />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-gray-700 font-medium">
                  <strong>From:</strong>
                  <p>{pkg.sender.name}</p>
                  <p>
                    {pkg.sender.state}, {pkg.sender.cityVil},{' '}
                    {pkg.sender.pincode}
                  </p>
                </div>
                <div className="text-gray-700 font-medium">
                  <strong>To:</strong>
                  <p>{pkg.receiver.name}</p>
                  <p>
                    {pkg.receiver.state}, {pkg.receiver.cityVil},{' '}
                    {pkg.receiver.pincode}
                  </p>
                </div>
                <div className="text-gray-600">
                  <p>
                    <strong>Last Updated:</strong>{' '}
                  </p>
                  <p>
                    {new Intl.DateTimeFormat('en-GB', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                    }).format(new Date(pkg.lastUpdated))}
                    , {new Date(pkg.lastUpdated).toLocaleTimeString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">
                    <strong>Cost:</strong> ₹{pkg.cost}
                  </p>
                  <div className="space-x-2">
                    <button
                      className=" py-1 px-4  text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
                      onClick={() => openModal(pkg)}
                    >
                      Details
                    </button>
                    {addJob && (
                      <button
                        className=" py-1 px-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
                        onClick={() => {
                          addJob(pkg._id);
                        }}
                      >
                        Accept
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {isModalOpen && selectedPackage && (
        <PackageModal pkg={selectedPackage} onClose={closeModal} />
      )}
    </div>
  );
}

export default PackageInfoCards;
