import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import globalContext from '../context/global/globalContext';
import { packageContext } from '../context/packages/packageContext';
import PackageModal from './PackageModal';
import StatusBadge from './StatusBadge';
import PackageInfoCards from './PackageInfoCards';

function Admin() {
  document.title = 'ParcelPro | Admin';
  const navigate = useNavigate();
  const gcontext = useContext(globalContext);
  const pContext = useContext(packageContext);
  const { customer, customerLogout, notify } = gcontext;
  const { addPackage, fetchPackages, packages, setPackages } = pContext;

  return (
    <>
      {' '}
      <div className="flex  justify-center space-x-2">
        <button
          className="py-2 px-4 max-w-64 w-full text-base font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          onClick={() => {
            fetchPackages('member', 'admin');
          }}
        >
          Fetch Packages
        </button>
      </div>
      <PackageInfoCards packages={packages} />
    </>
  );
}

export default Admin;
