import { Link, useLocation } from 'react-router-dom';
import { Map, Compass, Camera } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar glass-panel">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Map className="nav-icon" size={28} color="#d4af37" />
          <span>Villes du Maroc</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            Accueil
          </Link>
          <a href="#destinations" className="nav-link">
            Destinations
          </a>
          <a href="#galerie" className="nav-link">
            Galerie
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
