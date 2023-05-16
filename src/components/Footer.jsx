import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="contact">
          <h3>Gic Bonus</h3>
          <p>
            A108 Adam Street <br />
            New York, NY 535022
            <br />
            United States <br />
            <br />
            <strong>Phone:</strong> +237 6 94 57 93 15
            <br />
            <strong>Email:</strong> info@example.com
            <br />
          </p>
        </div>

        <div className="links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/training">Formations</Link>
            </li>
            <li>
              <Link to="/about">A Propos</Link>
            </li>
          </ul>
        </div>

        <div className="links">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="#">Web Design</a>
            </li>
            <li>
              <a href="#">Developpement Web</a>
            </li>
            <li>
              <a href="#">Product Management</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Design Graphique</a>
            </li>
          </ul>
        </div>

        <div className="links">
          <h4>Réseaux Social</h4>
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <div className="social-links">
            <a href="#" className="twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="fa-brands fa-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container bottom">
        <div className="copyright">
          &copy; Copyright
          <strong>
            <span> Gic Bonus</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="/">dimysenpai</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
