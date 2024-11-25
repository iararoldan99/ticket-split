import React, {createContext, useContext, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addMovement, getMovementById, getMovements, getMovementsByProjectId} from "../api/movements.js";
import {pushMovement} from "../store/movements/movementSlice.js";

const MovementContext = createContext();

export const useMovements = () => {
  const context = useContext(MovementContext);
  if (!context) throw new Error("useMovements must be used within MovementProvider");
  return context;
};

export const MovementProvider = ({children}) => {
  const [movement, setMovement] = useState(null);
  const [movements, setMovements] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const getMovement = async (id) => {
    try {
      const res = await getMovementById(id);
      if (res.data) {
        setMovement(res.data);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  };

  const getAllMovementsByProjectId = async (projectId) => {
    try {
      const res = await getMovementsByProjectId(projectId);
      if (res.data) {
        setMovements(res.data);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  }

  const getAllMovements = async () => {
    try {
      const res = await getMovements();
      if (res.data) {
        dispatch(setMovements(res.data));
        setMovements(res.data);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  };

  const createMovement = async (type, data) => {
    try{
      const res = await addMovement(type, data);
      if(res.data){
        dispatch(pushMovement(res.data));
        setMovements([...movements, res.data]);
        return true;
      }
    }catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getAllMovements();
      setLoading(false);
    })();
  }, []);

  return (
    <MovementContext.Provider value={{
      loading,
      movement,
      movements,
      getMovement,
      getAllMovements,
      createMovement,
      useMovements,
      getAllMovementsByProjectId,
    }}>
      {children}
    </MovementContext.Provider>
  );
};

export default MovementContext;
