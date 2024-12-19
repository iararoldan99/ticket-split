import React, {createContext, useContext, useState, useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  getProjectById,
  getProjects,
  updateProject,
  addExpenseToProjectApi,
  createProject,
  addFriendToProjectApi,
  deleteProjectByIdApi,
  removeFriendFromProjectApi,
  addBillFileToProjectApi
} from "../api/projects.js";
import {addExpenseToProjectSlice, setProjectsData} from "../store/project/projectSlice.js";

const ProjectContext = createContext();

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useProjects must be used within ProjectProvider");
  return context;
};

export const ProjectProvider = ({children}) => {
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [projectsLoaded, setProjectsLoaded] = useState(false);
  const dispatch = useDispatch();

  const getProject = async (id) => {
    try {
      const res = await getProjectById(id);
      if (res.data) {
        dispatch(setProjectsData(res.data));
        setProject(res.data);
        return true;
      }
      setProject(null);
      return false;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProjectContext = async (id, data) => {
    try {
      const res = await updateProject(id, data);
      if (res.data) {
        setProject(res.data);
        dispatch(setProjectsData(res.data));
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  };


  const getAllProjects = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getProjects();
      if (res.data) {
        setProjects(res.data);
        dispatch(setProjectsData(res.data));
      } else {
        setProjects([]);
        dispatch(setProjectsData([]));
      }
      return res.data || [];
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
      return [];
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!projectsLoaded) {
      getAllProjects();
      setProjectsLoaded(true);
    }
  }, [getAllProjects, projectsLoaded]);

  const addExpense = async (projectId, expenseData) => {
    try {
      const res = await addExpenseToProjectApi(projectId, expenseData);
      if (res.data) {
        dispatch(addExpenseToProjectSlice(res.data));
        setProject(res.data);
        return true;
      }
    } catch (error) {
      console.error(error)
    }
  }

  const addBillFileToProjectContext = async (projectId, file) => {
    try {
      const res = await addBillFileToProjectApi(projectId, file);
      if (res.data) {
        setProject(res.data);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  }

  const addProjectContext = async (project) => {
    setLoading(true);
    try {
      const res = await createProject(project);
      if (res.data) {
        const updatedProjects = [...projects, res.data];
        setProjects(updatedProjects);
        dispatch(setProjectsData(updatedProjects));
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    } finally {
      setLoading(false);
    }
  }

  const addFriendToProject = async (projectId, friendEmail) => {
    try {
      const res = await addFriendToProjectApi(projectId, friendEmail );
      if (res.data) {
        setProject(res.data);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeFriendFromProjectContext = async (projectId, friendId) => {
    try {
      const res = await removeFriendFromProjectApi(projectId, friendId);
      if (res.data) {
        setProject(res.data);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  }

  const deleteProjectContext = async (id) => {
    try {
      const res = await deleteProjectByIdApi(id);
      if (res.status === 200) {
        const updatedProjects = projects.filter(project => project._id !== id);
        setProjects(updatedProjects);
        dispatch(setProjectsData(updatedProjects));
        return true;
      }
    } catch (error) {
      console.error("Error eliminando proyecto:", error);
      return false;
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        if (res.data != null) {
          setProjects(res.data);
          dispatch(setProjectsData(res.data));
        } else {
          setProjects([]);
          dispatch(setProjectsData([]));
        }
      } catch (error) {
        console.error(error);
        setProjects([]);
        dispatch(setProjectsData([]));
      }
    };
    fetchProjects();
  }, [dispatch]);

  return (
    <ProjectContext.Provider
      value={{
      loading, projects, addProjectContext,
      project, getProject, updateProjectContext,
      getAllProjects, addExpense, addFriendToProject,
      deleteProjectContext, removeFriendFromProjectContext,
      addBillFileToProjectContext,
    }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
