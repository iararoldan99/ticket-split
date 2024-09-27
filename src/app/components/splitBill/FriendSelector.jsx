import React from 'react';

const FriendSelector = ({ friends, setFriends }) => {
  const handleFriendSelect = (index) => {
    const newFriends = [...friends];
    newFriends[index].isSelected = !newFriends[index].isSelected;
    setFriends(newFriends);
  };

  return (
    <div className="mt-6">
      <label className="block mb-2 text-lg font-semibold">Seleccionar amigos</label>
      <div className="space-y-2">
        {friends.map((friend, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={friend.isSelected}
              onChange={() => handleFriendSelect(index)}
              className="h-4 w-4"
            />
            <label>{friend.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendSelector;