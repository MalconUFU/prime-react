import { Link } from 'react-router-dom';
import './style.css';

function Header(){
    return(
        <header>
            <Link to="/" className="logo">Prime Flix</Link>
            <Link to="/favoritos" className="favoritos">Meus Favoritos</Link>
        </header>
    )
}

export default Header;