import React, {createContext, useContext, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getProjectById, getProjects, updateProject, addExpenseToProject as updateProjectAPI} from "../api/projects.js";
import {setProjectsData} from "../store/project/projectSlice.js";
import {addExpenseToProject} from "../../server/controllers/project.controller.js";

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
  const dispatch = useDispatch();

  const getProject = async (id) => {
    try {
      const res = await getProjectById(id);
      if (res.data) {
        setProject(res.data);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  };

  const updateProject = async (id, data) => {
    try {
      const res = await updateProjectAPI(id, data);  // Asegúrate de pasar `data`
      if (res.data) {
        setProject(res.data);
        return true;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getAllProjects = async () => {
    try {
      const res = await getProjects();
      if (res.data) {
        dispatch(setProjectsData(res.data));
        setProjects(res.data);
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
  };

  const addExpense = async (projectId, expenseData) => {
    // Implementa la lógica para agregar un gasto a un proyecto
    try{
      const res = await addExpenseToProject(projectId, expenseData);
      if(res.data){
        dispatch(addExpenseToProject(res.data));
        setProject(res.data);
        return true;
      }
    }catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getAllProjects();
      setLoading(false);
    })();
  }, []);

  return (
    <ProjectContext.Provider value={{loading, projects, project, getProject, updateProject, getAllProjects, addExpense}}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
