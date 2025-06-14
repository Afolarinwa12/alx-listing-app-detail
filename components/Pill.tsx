import React from 'react';
import { PillProps } from '@/interfaces';

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  const baseClasses = "px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors duration-200 ease-in-out";
  const activeClasses = "bg-blue-600 text-white shadow-md";
  const inactiveClasses = "bg-gray-200 text-gray-800 hover:bg-blue-100 hover:text-blue-700";

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Pill;
