import { useState, useEffect } from 'react';
import { db, collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from '../firebase/firebase';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import './ProjectForm.css';

const ProjectForm = () => {
  const [title, setTitle] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState([{name: '', icon: ''}]);
  const [projects, setProjects] = useState([]);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [formMode, setFormMode] = useState('add');
  const [projectToEdit, setProjectToEdit] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    githubLink: '',
    description: '',
    technologies: [],
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

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
  
  useEffect(() => {
    const fetchData = async () => {
      const projectData = await fetchProjects();
      setProjects(projectData);
    };

    fetchData();
  }, []);

  // Mettre à jour un projet
  const handleEditProject = (projectId) => {
    const project = projects.find(project => project.id === projectId);

    // On pré remplit le formulaire avec les détails du projet
    setFormData({
      title: project.title,
      githubLink: project.githubLink || '',
      description: project.description || '',
      technologies: project.technologies || [],
    });

    setProjectToEdit(projectId);
    setFormMode('edit');
  };

  const handleCancelEdit = () => {
    // on réinitialise le formulaire à éditer
    setFormData({
      title: '',
      githubLink: '',
      description: '',
      technologies: [],
    });
    setProjectToEdit(null);
    setFormMode('add');
  };

  const handleUpdateProject = async () => {
    try {
      if (formMode === 'add') {
        const projectRef = collection(db, 'Projects');
        await addDoc(projectRef, formData);
      } else if (formMode === 'edit' && projectToEdit) {
        const projectRef = doc(db, 'Projects', projectToEdit);
        await updateDoc(projectRef, formData);
      }
      // Mise à jour des projets affichés
      const updatedProjects = await fetchProjects();
      setProjects(updatedProjects);

        // Réinitialisation du formulaire
        setFormData({
          title: '',
          githubLink: '',
          description: '',
          technologies: [],
        });
        setProjectToEdit(null);
        setFormMode('add');
    } catch (error) {
      console.error("Erreur lors de la mise à jour du projet :", error);
    }
  };

  // Validation du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    // vérification des champs
    if (!title || !githubLink || !description 
        || technologies.some(tech => !tech.name || !tech.icon)) {
      setErrorMessage("Veuillez remplir tous les champs du projet.");
      return;
    } 
    
    try {
      const projectRef = collection(db, 'Projects');
      const newProject = {
        title,
        githubLink,
        description,
        technologies: [...technologies],
      };

      await addDoc(projectRef, newProject);
      console.log("Projet ajouté avec succés à Firebase: ", newProject);
      
      // Vide le formulaire
      setTitle('');
      setGithubLink('');
      setDescription('');
      setTechnologies([{name: '', icon: ''}]);

      setErrorMessage(null);
      setSuccessMessage("Le projet a été ajouté avec succés.");

    } catch(error) {
      console.error("Erreur lors de l'ajout du projet à Firebase: ", error);

      setSuccessMessage(null);
      setErrorMessage("Désolé, votre projet n'a pas pu être ajouté à Firebase.");
    }
  };

  // Ajouter la nouvelle technologie à la liste
  const handleAddTechnology = () => {
    setTechnologies(prevTechnologies => [...prevTechnologies, { name: '', icon: '' }]);
  };

  // Modifier les technologies
  const handleTechnologyChange = (index, key, value) => {
    setTechnologies(prevTechnologies => {
      const updatedTechnologies = [...prevTechnologies];
      updatedTechnologies[index][key] = value;
      return updatedTechnologies;
    });
  };

  // Suppression d'un projet
  const handleDeleteProject = async (projectId) => {
    const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce projet ?");

    if(confirmDelete) {
      try {
        const projectRef = doc(db, 'Projects', projectId);
        await deleteDoc(projectRef);
  
        // Mets à jour la liste des projets affichés
        setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
      } catch (error) {
        console.error("Erreur lors de la suppression du projet :", error);
      }
    } else {
      // Annule la suppression du projet
      setProjectToDelete(null);
    }
  };

  return (
    <div>
        <Header />
        <section>
            <h2 className="title-form-project">Gestion des projets</h2>
            {successMessage && <div className="success-message">{successMessage}</div>}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <form onSubmit={handleSubmit} className="form-projects">
                <label>
                    Titre du Projet:
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Lien GitHub:
                    <input
                    type="text"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Description du Projet:
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br />
                {technologies.map((tech, index) => (
                  <div key={index}>
                      <label>
                          Technologie - Nom:
                          <input
                          type="text"
                          value={tech.name}
                          onChange={(e) => handleTechnologyChange(index, 'name' , e.target.value)}
                          />
                      </label>
                      <br />
                      <label>
                        Technologie - Icônes:
                        <input
                        type="text"
                        value={tech.icon}
                        onChange={(e) => handleTechnologyChange(index, 'icon', e.target.value)}
                        />
                    </label>
                    <br />
                  </div>
                ))}
                <button type="button" onClick={handleAddTechnology}>Ajouter Technologie</button>
                <button type="submit" onClick={handleSubmit}>Ajouter le Projet</button>
            </form>
        </section>
        <section>
          <h2>Liste des Projets</h2>
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                <p>{project.title}</p>
                <button onClick={() => handleEditProject(project.id)}>Modifier</button>
                <button onClick={() => setProjectToDelete(project.id)}>
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          {/* Affiche le container pour confirmer la suppression d'un projet */}
          {projectToDelete && (
            <div>
              <p>Voulez-vous vraiment supprimer ce projet ?</p>
              <button onClick={() => handleDeleteProject(projectToDelete)}>Oui</button>
              <button onClick={() => setProjectToDelete(null)}>Non</button>
            </div>
          )}
          {/* Affiche le container pour confirmer la modification d'un projet */}
          {projectToEdit && (
            <div>
                <h2>Modifier le Projet</h2>
                <form>
                  <label>
                    Nouveau Titre:
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </label>
                  <br />
                  <label>
                    Nouveau lien Github:
                    <input
                      type="text"
                      value={formData.githubLink}
                      onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                    />
                  </label>
                  <br />
                  <label>
                    Description du Projet:
                    <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </label>
                  <br />
                  {technologies.map((technologie, index) => (
                  <div key={index}>
                      <label>
                          Technologie - Nom:
                          <input
                          type="text"
                          value={technologie.name}
                          onChange={(e) => handleTechnologyChange(index, 'name', e.target.value)}
                          />
                      </label>
                      <br />
                      <label>
                        Technologie - Icônes:
                        <input
                        type="text"
                        value={technologie.icon}
                        onChange={(e) => handleTechnologyChange(index, 'icon', e.target.value)}
                        />
                    </label>
                    <br />
                  </div>
                ))}
                <button type="button" onClick={handleAddTechnology}>Ajouter Technologie</button>
                </form>
                <p>Voulez-vous modifier ce projet ?</p>
                <button type="button" onClick={handleUpdateProject}>Enregistrer</button>
                <button type="button" onClick={handleCancelEdit}>Annuler</button>
            </div>
          )}
        </section>
        <Footer />
    </div>
  );
};

export default ProjectForm;
