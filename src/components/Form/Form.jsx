import "./Form.css";

const Form = () => {
    return(
        <section id="contact" className="contact">
            <h2 className="title-section">Contact</h2>
            <form className="form" action="#" method="post">
                <div>
                    <label htmlFor="lastname" className="label">Nom</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Votre Nom" className="input" required />

                    <label htmlFor="firstname" className="label">Prénom</label>
                    <input type="text" id="firstname" name="firstname" placeholder="Votre Prénom" className="input" required />

                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" id="email" name="email" placeholder="Votre Email" className="input" required />
                </div>
                <div className="message-form">
                    <label htmlFor="message" className="label">Votre message</label>
                    <textarea name="message" id="message" cols="40" rows="8"
                    placeholder="Votre Message..." className="textarea" required></textarea>

                    <button type="submit" className="btn-form">Envoyer</button>
                </div>
            </form>
        </section>
    )
};

export default Form;