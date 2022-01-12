import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return(
        <header>
        <nav className="container">
            <div className="api-movie-nav-content">
                <h1>Movie</h1>
                <a href="https://github.com/ssjackbr/api-movie" target="_blank" rel="noreferrer">
                    <div className="api-movie-contact-container">
                        <GithubIcon />
                        <p className="api-movie-contact-link">/ssjackbr</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}
export default Navbar;