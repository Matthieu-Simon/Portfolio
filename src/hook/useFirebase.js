import { useState, useEffect } from "react";
import { db, collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "../firebase/firebase";

const useFirebase = () => {
    const [projects, setProjects] = useState([]);

    // Récupération des projets depuis Firestore
    const fetchProjects = async () => {
        try {
        const projectsCollection = collection(db, "Projects");
        const projectsSnapshot = await getDocs(projectsCollection);

        // Transforme les données snapshot en un tableau d'objets
        const projectsData = projectsSnapshot.docs.map(doc => ({ 
            id: doc.id, 
            ...doc.data(),
        }));

        return projectsData;
        } catch (error) {
        console.error("Erreur lors du chargement des projets :", error);
        }
    };

    // Ajout d'un projet
    const addProject = async (formData) => {
        try {
            const projectRef = collection(db, 'Projects');
            await addDoc(projectRef, formData);
            const updatedProjects = await fetchProjects();
            setProjects(updatedProjects);
        } catch (error) {
            console.error("Erreur lors de l'ajout du projet à Firebase :", error);
        }
    };

    // Mise à jour d'un projet
    const updateProject = async (projectId, formData) => {
        try {
            const projectRef = doc(db, 'Projects', projectId);
            await updateDoc(projectRef, formData);
            const updatedProjects = await fetchProjects();
            setProjects(updatedProjects);
        } catch (error) {
            console.error("Erreur lors de la mise à jour du projet :", error)
        }
    };

    // Suppression d'un projet
    const deleteProject = async (projectId) => {
        try {
            const projectRef = doc(db, 'Projects', projectId);
            await deleteDoc(projectRef);
            const updatedProjects = projects.filter((project) => project.id !== projectId);
            setProjects(updatedProjects);
        } catch (error) {
            console.error("Erreur lors de la suppression du projet :", error)
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const projectData = await fetchProjects();
            setProjects(projectData);
        };
        fetchData();
    }, []);

    return { projects, addProject, updateProject, deleteProject };
};

export default useFirebase;