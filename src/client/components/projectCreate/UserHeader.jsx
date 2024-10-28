import React from 'react';
import userIcon from '../../assets/img/UserIcon.svg';

const UserHeader = ({ userName, sectionName }) => {
  return (
    <div className="flex items-center space-x-2 mb-6">
      <img src={userIcon} alt="User Icon" className="w-12 h-12 rounded-full" />
      <p className="text-lg font-semibold text-gray-800 whitespace-nowrap">
        {userName} <span className="text-gray-500">/</span> <span className="text-black">{sectionName}</span>
      </p>
    </div>
  );
};

export default UserHeader;
