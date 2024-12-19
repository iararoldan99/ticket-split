import React, { createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  addMovement,
  getMovementById,
  getMovements,
  getMovementsByProjectId,
} from '../api/movements.js';
import { pushMovement, setMovementsData } from '../store/movements/movementSlice.js';

const MovementContext = createContext();

export const useMovements = () => {
  const context = useContext(MovementContext);
  if (!context) throw new Error('useMovements must be used within MovementProvider');
  return context;
};

export const MovementProvider = ({ children }) => {
  const [movement, setMovement] = useState(null);
  const [movements, setMovements] = useState([]);
  const [loading, setLoading] = useState(false); // Control de carga
  const [error, setError] = useState(null); // Control de errores
  const dispatch = useDispatch();

  const getMovement = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const res = await getMovementById(id);
      if (res.data) {
        setMovement(res.data);
        return res.data;
      }
      return null;
    } catch (err) {
      console.error('Error fetching movement:', err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const getAllMovementsByProjectId = async (projectId) => {
    setLoading(true);
    setError(null);
    try {
      const res = await getMovementsByProjectId(projectId);
      if (res.data) {
        setMovements(res.data);
        return res.data;
      }
      return [];
    } catch (err) {
      console.error('Error fetching movements by project ID:', err);
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const getAllMovements = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getMovements();
      if (res.data) {
        dispatch(setMovementsData(res.data));
        setMovements(res.data);
        return res.data;
      }
      return [];
    } catch (err) {
      console.error('Error fetching all movements:', err);
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const createMovement = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await addMovement(data);
      if (res.data) {
        dispatch(pushMovement(res.data));
        setMovements((prevMovements) => [...prevMovements, res.data]);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Error creating movement:', err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMovements = async () => {
      try {
        const res = await getMovements();
        if (res.data != null) {
          dispatch(setMovementsData(res.data));
          setMovements(res.data);
        } else {
          setMovements([]);
          dispatch(setMovementsData([]));
        }
      } catch (err) {
        console.error('Error initializing movements:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovements();
  }, [dispatch]);

  return (
    <MovementContext.Provider
      value={{
        loading,
        error,
        movement,
        movements,
        getMovement,
        getAllMovements,
        createMovement,
        getAllMovementsByProjectId,
      }}
    >
      {children}
    </MovementContext.Provider>
  );
};

export default MovementContext;
