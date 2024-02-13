import { useState} from 'react';
import { db, collection, addDoc } from "../firebase/firebase";
import useFirebase from "../hook/useFirebase";
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import './ProjectForm.css';

const ProjectForm = () => {
  const { projects, addProject, updateProject, deleteProject } = useFirebase();
  const [title, setTitle] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [description, setDescription] = useState('');
  const [technologies, setTechnologies] = useState([{name: '', icon: ''}]);
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
        await addProject(formData);
      } else if (formMode === 'edit' && projectToEdit) {
        await updateProject(projectToEdit, formData);
      }

        // Réinitialisation du formulaire
        setFormData({
          title: '',
          githubLink: '',
          description: '',
          technologies: [],
        });
        setProjectToEdit(null);
        setFormMode('add');

        setSuccessMessage("Le Projet a été ajouté/modifié avec succés.");
        setTimeout(clearMessages, 3000);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du projet :", error);

      setErrorMessage("Erreur lors de la mise à jour du projet.")
      setTimeout(clearMessages, 3000);
    }
  };

  // Validation du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    // vérification des champs
    if (!title || !githubLink || !description 
        || technologies.some(tech => !tech.name || !tech.icon)) {
      setErrorMessage("Veuillez remplir tous les champs du projet.");
      setTimeout(clearMessages, 3000);
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


      setSuccessMessage("Le projet a été ajouté avec succés.");
      setTimeout(clearMessages, 3000);
    } catch(error) {
      console.error("Erreur lors de l'ajout du projet à Firebase: ", error);

      setErrorMessage("Désolé, votre projet n'a pas pu être ajouté à Firebase.");
      setTimeout(clearMessages, 3000);
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
        await deleteProject(projectId);
        setProjectToDelete(null)
    } else {
      // Annule la suppression du projet
      setProjectToDelete(null);
    }
  };


  const clearMessages = () => {
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  return (
    <div>
        <Header />
        <section className="section-form-project">
            <h2 className="title-form-project">Gestion des projets</h2>
            {successMessage && 
              <div className="success-message">
                {successMessage}
              </div>}
            {errorMessage && 
              <div className="error-message">
                {errorMessage}
              </div>}
            <form onSubmit={handleSubmit} className="form-projects">
                <label>
                    Titre du Projet
                    <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Lien GitHub
                    <input
                    type="text"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Description du Projet
                    <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <br />
                {technologies.map((tech, index) => (
                  <div key={index}>
                      <label>
                          Technologie - Nom
                          <input
                          type="text"
                          value={tech.name}
                          onChange={(e) => handleTechnologyChange(index, 'name' , e.target.value)}
                          />
                      </label>
                      <br />
                      <label>
                        Technologie - Icônes
                        <input
                        type="text"
                        value={tech.icon}
                        onChange={(e) => handleTechnologyChange(index, 'icon', e.target.value)}
                        />
                    </label>
                    <br />
                  </div>
                ))}
                <button type="button" onClick={handleAddTechnology} 
                  className="btn-form-project">
                  Ajouter Technologie
                </button>
                <button 
                  type="submit" 
                  onClick={handleSubmit} 
                  className="btn-form-project btn-add-project">
                  Ajouter le Projet
                </button>
            </form>
        </section>
        <section className="section-form-project">
          <h2 className="title-form-project">Liste des Projets</h2>
          <ul className="list-update-project">
            {projects && projects.map(project => (
              <li key={project.id} className="list-form-project">
                <h3>{project.title}</h3>
                <button onClick={() => handleEditProject(project.id)}
                  className="btn-form-project">
                  Modifier
                </button>
                <button onClick={() => setProjectToDelete(project.id)}
                  className="btn-form-project">
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          {/* Affiche le container pour confirmer la suppression d'un projet */}
          {projectToDelete && (
            <div className="delete-section">
              <p className="confirm-message">
                Voulez-vous vraiment supprimer ce projet ?
              </p>
              <div>
                <button 
                  onClick={() => handleDeleteProject(projectToDelete)} className="btn-form-project">
                  Oui
                </button>
                <button 
                  onClick={() => setProjectToDelete(null)} 
                  className="btn-form-project">
                  Non
                </button>
              </div>
            </div>
          )}  
        </section>
        {/* Affiche le container pour confirmer la modification d'un projet */}
        {projectToEdit && (
          <section className="section-form-project">
            <div >
                <h2 className="title-form-project">Modifier le Projet</h2>
                <form className="form-projects">
                  <label>
                    Nouveau Titre
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </label>
                  <br />
                  <label>
                    Nouveau lien Github
                    <input
                      type="text"
                      value={formData.githubLink}
                      onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
                    />
                  </label>
                  <br />
                  <label>
                    Description du Projet
                    <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </label>
                  <br />
                  {technologies.map((technologie, index) => (
                  <div key={index}>
                      <label>
                          Technologie - Nom
                          <input
                          type="text"
                          value={technologie.name}
                          onChange={(e) => handleTechnologyChange(index, 'name', e.target.value)}
                          />
                      </label>
                      <br />
                      <label>
                        Technologie - Icônes
                        <input
                        type="text"
                        value={technologie.icon}
                        onChange={(e) => handleTechnologyChange(index, 'icon', e.target.value)}
                        />
                    </label>
                    <br />
                  </div>
                ))}
                <button type="button" onClick={handleAddTechnology}
                  className="btn-form-project">
                  Ajouter Technologie
                </button>
                </form>
                <div className="form-update-section"> 
                  <p className="confirm-message">Voulez-vous modifier ce projet ?</p>
                  <button type="button" onClick={handleUpdateProject}
                    className="btn-form-project">
                    Enregistrer
                  </button>
                  <button 
                    type="button" onClick={handleCancelEdit} 
                    className="btn-form-project btn-remove">
                    Annuler
                  </button>
                </div>
            </div>
          </section>
          )}
        <Footer />
    </div>
  );
};

export default ProjectForm;