import axios from './axios.js';

export const addFriend = friend => axios.post(`/friend/add`, friend);

export const getFriends = async () => axios.get(`/friends`);

export const deleteFriend = async (id) => axios.delete(`/friend/delete`, id);

