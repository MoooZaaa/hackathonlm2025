import './login.css';

export default function LoginPage() {

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here, e.g., API call
        console.log("Login form submitted");
    };

    // Handle input change
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(`${name}: ${value}`);
    };

    // Handle button click
    const handleButtonClick = () => {
        console.log("Login button clicked");
    };

    return (
        <div className="login-page">
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
            <div className="login-container">
                <div className="login-title">
                    <h1>Connexion</h1>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Nom d'utilisateur :</label>
                        <input className='form-input' type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe :</label>
                        <input className='form-input' type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Connexion</button>
                    <div className="register">
                        <label className='register-label'>Pas de compte ? <a href='/register'><span className='register-span'>Inscrivez-vous</span></a></label>
                    </div>
                </form>
            </div>
        </div>
    );
};