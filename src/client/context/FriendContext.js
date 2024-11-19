import React, {createContext, useContext, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setFriends} from "../store/friends/friendSlice.js";

const FriendContext = createContext();

export const useFriends = () => {
  const context = useContext(FriendContext);
  if (!context) throw new Error("useFriends must be used within FriendProvider");
  return context;
};

export const FriendProvider = ({children}) => {
  const [friendsData, setFriendsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getFriends = async () => {
    try {
      const res = await getFriends();
      if (res.data != null) {
        dispatch(setFriends(res.data));
        setFriendsData(res.data)
        return true;
      }
      console.log(res.data)
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const res = getFriends();
      console.log(res);
      if (!res.data) return [];
      dispatch(setFriends(res.data));
      setFriendsData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setFriendsData([]);
      dispatch(setFriends([]));
    }
  }, []);

  return (
    <FriendContext.Provider
      value={{
        loading,
        friendsData,
      }}
    >
      {children}
    </FriendContext.Provider>
  );
};

export default FriendContext;
