import { useState } from 'react';
import GlobalContext from './globalContext';

import { toast } from 'react-toastify';

const GlobalState = props => {
  // Alert----------------------------

  const isPhone = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Patterns to detect mobile phones
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent.toLowerCase()
    );
  };

  // ---------------------------------
  // Spinner---------------------------
  const [spinner, setSpinner] = useState(false);

  // Notification

  const notify = (message, type) => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      case 'info':
        toast.info(message);
        break;
      case 'warn':
        toast.warn(message);
        break;
      default:
        toast(message);
    }
  };

  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = useState(false);
  const [isAgentLoggedIn, setIsAgentLoggedIn] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        isPhone,
        isCustomerLoggedIn,
        isAgentLoggedIn,
        setIsAgentLoggedIn,
        setIsCustomerLoggedIn,
        spinner,
        setSpinner,
        notify,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
