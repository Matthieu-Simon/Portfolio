import { useState } from "react";
import "./Form.css";

const Form = () => {
    const [formData, setFormData] = useState({
        lastname: "",
        firstname: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        lastname: "",
        firstname: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    };

    const validateForm = () => {
        const newErrors = {};

        const validateField = (fieldName, errorMessage) => {
            if(!formData[fieldName]) {
                newErrors[fieldName] = errorMessage;
            }
        };

        validateField("lastname", "Veuillez saisir votre nom.");
        validateField("firstname", "Veuillez saisir votre prénom.");
        validateField("email", "Veuillez saisir votre email.");
        validateField("message", "Veuillez saisir votre message.");

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateForm()) {
            return;
        };

        console.log(("Formulaire soumis :", formData));

        setFormData({
            lastname: "",
            firstname: "",
            email: "",
            message: "",
        });
    };

    return(
        <section id="contact" className="contact">
            <h2 className="title-section">Contact</h2>
            <form className="form" action="#" method="post" onSubmit={handleSubmit}>
                <h3 className="subtitle-section">Me contacter</h3>
    
                <a href="mailto:simon.matthieu89@gmail.com" className="link-mail">
                    <span className="mail">simon.matthieu89@gmail.com</span>
                </a>

                <div className="info-form">
                    <label htmlFor="lastname" className="label">Nom</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Votre Nom" className="input" value={formData.lastname} onChange={handleChange} required />
                    {errors.lastname && <span className="error">{errors.lastname}</span>}

                    <label htmlFor="firstname" className="label">Prénom</label>
                    <input type="text" id="firstname" name="firstname" placeholder="Votre Prénom" className="input" value={formData.firstname} onChange={handleChange} required />
                    {errors.firstname && <span className="error">{errors.firstname}</span>}

                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre Email" className="input" value={formData.email} onChange={handleChange} required />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="message-form">
                    <label htmlFor="message" className="label">Votre message</label>
                    <textarea name="message" id="message" cols="40" rows="8"
                    placeholder="Votre Message..." className="textarea" value={formData.message} onChange={handleChange} required></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}

                    <button type="submit" className="btn-form">Envoyer</button>
                </div>
            </form>
        </section>
    )
};

export default Form;