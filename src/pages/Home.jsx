import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Sun } from 'lucide-react';
import './Home.css';

const cities = [
  {
    id: "marrakech",
    name: "Marrakech",
    tagline: "La Ville Ocre",
    image: import.meta.env.BASE_URL + "images/marrakech_main.jpg",
    temp: "28°C"
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen",
    tagline: "La Perle Bleue",
    image: import.meta.env.BASE_URL + "images/chefchaouen_main.jpg",
    temp: "22°C"
  },
  {
    id: "dakhla",
    name: "Dakhla",
    tagline: "Le Paradis du Désert",
    image: import.meta.env.BASE_URL + "images/dakhla_main.jpg",
    temp: "25°C"
  }
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Découvrez la Magie du <span className="text-gold">Maroc</span>
          </h1>
          <p className="hero-subtitle">
            Un voyage à travers les couleurs, les senteurs et l'histoire millénaire des plus belles villes du Royaume.
          </p>
          <a href="#destinations" className="cta-button glass-panel delay-1">
            Explorer les villes <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="destinations-section">
        <h2 className="section-title animate-fade-in">Destinations Populaires</h2>
        
        <div className="cities-grid">
          {cities.map((city, index) => (
            <Link to={`/ville/${city.id}`} key={city.id} className={`city-card glass-card animate-fade-in delay-${index + 1}`}>
              <div className="city-image-container">
                <img src={city.image} alt={city.name} className="city-image" />
                <div className="weather-badge glass-panel">
                  <Sun size={16} /> {city.temp}
                </div>
              </div>
              <div className="city-info">
                <h3>{city.name}</h3>
                <p className="city-tagline">{city.tagline}</p>
                <div className="explore-link">
                  Découvrir <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
