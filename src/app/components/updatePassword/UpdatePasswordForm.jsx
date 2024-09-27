import React, { useState } from 'react';

const UpdatePasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Password updated successfully:", {
      currentPassword,
      newPassword,
      confirmPassword
    });

    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="relative w-full lg:w-[90%] mx-auto"> 
      <form className="space-y-6 w-full max-w-lg mx-auto mt-16 mr-20" style={{ marginRight: '30rem' }} onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-black" htmlFor="currentPassword">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Enter your current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black" htmlFor="newPassword">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black" htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black focus:ring-0 sm:text-sm"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="ml-0 mt-4">
          <label className="block text-sm font-medium text-black">
            Disable Ads <span className="bg-[#B9FF66] text-black font-medium px-1 rounded">PRO</span>
          </label>
          <p className="text-gray-500 mt-1">Disable ads with a monthly subscription for Pro accounts.</p>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="bg-[#B9FF66] text-black py-2 px-4 rounded-lg shadow-sm hover:bg-[#a3e65b] transition duration-300 font-semibold"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
