import React from 'react';
import linkedinPic from '../../assets/img/linkedin-icon.png'; 

const ProfileCard = ({ name, title, description, profileImage, linkedInLink }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-4 w-64">
      <div className="relative mb-4">
        <img
          src={profileImage}
          alt={`${name} profile`}
          className="w-16 h-16 rounded-full object-cover z-10 relative"
        />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
      <div className="text-center mt-2">
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <div className="mt-4">
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <img src={linkedinPic} alt="LinkedIn" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;