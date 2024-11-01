import React from 'react';
import {
  CheckCircle,
  Truck,
  Package,
  Clock,
  ArrowRightCircle,
  Box,
  CircleX,
} from 'lucide-react'; // Assuming you have these icons from lucide-react

const StatusBadge = ({ status }) => {
  const getStatusStyles = status => {
    switch (status) {
      case 'pending':
        return {
          color: 'yellow',
          icon: <Clock className="inline-block mr-1" size={16} />,
          text: 'Pending',
        };
      case 'dispatched':
        return {
          color: 'blue',
          icon: <ArrowRightCircle className="inline-block mr-1" size={16} />,
          text: 'Dispatched',
        };
      case 'transit':
        return {
          color: 'blue',
          icon: <Truck className="inline-block mr-1" size={16} />,
          text: 'In Transit',
        };
      case 'staged':
        return {
          color: 'orange',
          icon: <Box className="inline-block mr-1" size={16} />,
          text: 'Staged',
        };
      case 'out':
        return {
          color: 'orange',
          icon: <Truck className="inline-block mr-1" size={16} />,
          text: 'Out for Delivery',
        };
      case 'delivered':
        return {
          color: 'green',
          icon: <CheckCircle className="inline-block mr-1" size={16} />,
          text: 'Delivered',
        };
      case 'failed':
        return {
          color: 'red',
          icon: <CircleX className="inline-block mr-1" size={16} />,
          text: 'Failed',
        };
      default:
        return {
          color: 'gray',
          icon: <Package className="inline-block mr-1" size={16} />,
        };
    }
  };

  const { color, icon, text } = getStatusStyles(status);

  return (
    <span
      className={`relative inline-block px-3 py-1 font-semibold text-${color}-900 leading-tight`}
    >
      <span
        aria-hidden
        className={`absolute inset-0 bg-${color}-200 opacity-50 rounded-full`}
      ></span>
      <span className="relative text-sm">
        {icon}
        {text}
      </span>
    </span>
  );
};

export default StatusBadge;
