import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Sun, Calendar, Info, Camera } from 'lucide-react';
import './CityDetail.css';

const cityData = {
  marrakech: {
    name: "Marrakech",
    tagline: "La Ville Ocre",
    heroImage: import.meta.env.BASE_URL + "images/marrakech_main.jpg",
    weather: "28°C",
    description: "Marrakech, connue sous le nom de 'Ville Ocre' en raison de la couleur de ses murs, est l'une des quatre villes impériales du Maroc. Fondée au XIe siècle, elle est célèbre pour son architecture hispano-mauresque, ses jardins luxuriants et sa médina animée classée au patrimoine mondial de l'UNESCO.",
    history: "Fondée par les Almoravides en 1070, Marrakech a été la capitale de l'empire islamique. La célèbre mosquée Koutoubia et les tombeaux Saadiens témoignent de son passé glorieux.",
    gallery: [
      { src: "https://picsum.photos/seed/m1/800/600", title: "Place Jemaa el-Fna" },
      { src: "https://picsum.photos/seed/m2/800/600", title: "Jardin Majorelle" },
      { src: "https://picsum.photos/seed/m3/800/600", title: "Palais Bahia" }
    ]
  },
  chefchaouen: {
    name: "Chefchaouen",
    tagline: "La Perle Bleue",
    heroImage: import.meta.env.BASE_URL + "images/chefchaouen_main.jpg",
    weather: "22°C",
    description: "Nichée dans les montagnes du Rif, Chefchaouen est mondialement connue pour ses bâtiments aux nuances de bleu. Cette petite ville offre une atmosphère calme, loin de l'agitation des grandes métropoles, idéale pour se ressourcer.",
    history: "Fondée en 1471 comme base pour attaquer les Portugais, la ville a accueilli de nombreux réfugiés andalous, ce qui a fortement influencé son architecture et sa culture.",
    gallery: [
      { src: "https://picsum.photos/seed/c1/800/600", title: "Ruelles Bleues" },
      { src: "https://picsum.photos/seed/c2/800/600", title: "Place Outa el Hammam" },
      { src: "https://picsum.photos/seed/c3/800/600", title: "Cascade de Ras El Maa" }
    ]
  },
  dakhla: {
    name: "Dakhla",
    tagline: "Le Paradis du Désert",
    heroImage: import.meta.env.BASE_URL + "images/dakhla_main.jpg",
    weather: "25°C",
    description: "Située sur une péninsule s'étendant dans l'océan Atlantique, Dakhla est l'endroit où le désert rencontre la mer. C'est un spot de renommée mondiale pour le kitesurf et un paradis écologique.",
    history: "Anciennement connue sous le nom de Villa Cisneros pendant la période coloniale espagnole, Dakhla s'est rapidement développée pour devenir un pôle touristique et économique majeur du sud du Maroc.",
    gallery: [
      { src: "https://picsum.photos/seed/d1/800/600", title: "Lagon de Dakhla" },
      { src: "https://picsum.photos/seed/d2/800/600", title: "Dune Blanche" },
      { src: "https://picsum.photos/seed/d3/800/600", title: "Île du Dragon" }
    ]
  }
};

const CityDetail = () => {
  const { id } = useParams();
  const city = cityData[id];

  if (!city) {
    return (
      <div className="city-not-found">
        <h2>Ville introuvable</h2>
        <Link to="/" className="back-link"><ArrowLeft /> Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="city-detail">
      {/* Hero Header */}
      <header className="city-header" style={{ backgroundImage: `url(${city.heroImage})` }}>
        <div className="header-overlay"></div>
        <div className="header-content animate-fade-in">
          <Link to="/" className="back-button glass-panel">
            <ArrowLeft size={20} />
            <span>Retour</span>
          </Link>
          <div className="title-wrapper">
            <h1 className="city-title">{city.name}</h1>
            <p className="city-tagline-large">{city.tagline}</p>
          </div>
          <div className="weather-badge-large glass-panel">
            <Sun size={24} />
            <span>{city.weather}</span>
          </div>
        </div>
      </header>

      <div className="content-container">
        {/* Main Info */}
        <div className="info-grid">
          <section className="glass-card animate-fade-in delay-1 info-section">
            <div className="section-header">
              <Info className="section-icon" />
              <h2>À Propos</h2>
            </div>
            <p className="section-text">{city.description}</p>
          </section>

          <section className="glass-card animate-fade-in delay-2 info-section">
            <div className="section-header">
              <Calendar className="section-icon" />
              <h2>Histoire</h2>
            </div>
            <p className="section-text">{city.history}</p>
          </section>
        </div>

        {/* Gallery */}
        <section className="gallery-section animate-fade-in delay-3">
          <div className="section-header center">
            <Camera className="section-icon" />
            <h2>Galerie Photo</h2>
          </div>
          <div className="gallery-grid">
            {city.gallery.map((img, index) => (
              <div key={index} className="gallery-item glass-card">
                <img src={img.src} alt={img.title} />
                <div className="gallery-overlay">
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CityDetail;
