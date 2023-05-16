import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <div className="logoContent">
          <span>Gic Bonus</span>
        </div>
      </Link>
      <div className="btnContent">
        <Link to="/">Accueil</Link>
        <Link to="/service">Services</Link>
        <Link to="/training">Formations</Link>
        <Link to="/about">A Propos</Link>
      </div>
      <div className="logContent">
        <button>Connexion</button>
      </div>
    </header>
  );
};

export default Header;
