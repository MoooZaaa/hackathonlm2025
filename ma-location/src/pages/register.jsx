import './register.css';

export default function RegisterPage() {

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform register logic here, e.g., API call
        console.log("Register form submitted");
    };

    // Handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`${name}: ${value}`);
    };

    // Handle button click
    const handleButtonClick = () => {
        console.log("Register button clicked");
    };

    return (
        <div className="register-page">
            <header id="header">
                <nav className="container">
                    <div className="logo"><a className='home-btn' href='/'>M.A<span>Location</span></a></div>
                    <ul className="nav-links">
                        <li><a href="#featured" className="nav-link">Découvrir</a></li>
                        <li><a href="#how" className="nav-link">Comment ça marche</a></li>
                        <li><a href="#benefits" className="nav-link">Avantages</a></li>
                        <li><a href="#testimonials" className="nav-link">Témoignages</a></li>
                        <li><a href="#" className="btn">Ajouter un objet</a></li>
                        <li><a href="/login" className="btn btn-secondary">Se connecter</a></li>
                    </ul>
                    <div className="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </header>
            <div className="register-container">
                <div className="register-title">
                    <h1>Enregistrement</h1>
                </div>
                <form>
                    <div className="form-columns">
                        <div className="left">
                            <div className="form-group">
                                <label htmlFor="username">Nom d'utilisateur :</label>
                                <input className='form-input' type="text" id="username" name="username" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Adresse mail :</label>
                                <input className='form-input' type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe :</label>
                                <input className='form-input' type="password" id="password" name="password" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordBis">Confirmer le mot de passe :</label>
                                <input className='form-input' type="password" id="passwordBis" name="passwordBis" required />
                            </div>
                        </div>
                        <div className="separator"></div>
                        <div className="right">
                            <div className="form-group">
                                <label htmlFor="firstname">Prénom :</label>
                                <input className='form-input' type="firstname" id="firstname" name="firstname" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Nom :</label>
                                <input className='form-input' type="lastname" id="lastname" name="lastname" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthdate">Date de naissance :</label>
                                <input className='form-input' type="date" id="birthdate" name="birthdate" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phonenumber">Numéro de téléphone :</label>
                                <input className='form-input' type="phonenumber" id="phonenumber" name="phonenumber" required />
                            </div>
                        </div>
                    </div>
                    <button type="submit">Enregister</button>
                    <div className="register">
                        <label className='register-label'>Vous avez déjà un compte ? <a href='/login'><span className='register-span'>Se connecter</span></a></label>
                    </div>
                </form>
            </div>
        </div>
    );
};