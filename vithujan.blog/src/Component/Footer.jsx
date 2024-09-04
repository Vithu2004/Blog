import { Link } from "react-router-dom";

import "../Style/Footer.css";

function Footer() {
  return (
    <section className="bi-footer">
      <section className="bi-footer-link-section">
        <div className="bi-footer-publisher">
          <h3 className="bi-footer-item publisher-title">
            Contact the Publisher
          </h3>
          <p className="bi-publisher-link mail">vithujan.blog@gmail.com</p>
          <p className="bi-publisher-link number">+33 7 49 28 87 96</p>
        </div>
        <div className="bi-footer-line first"></div>
        <div className="bi-footer-lines second">
          <Link to="/About-Me" className="bi-footer-link about">
            About Me
          </Link>
          <Link to="Legal-Mention" className="bi-footer-link disclaimer">
            Legal Mention
          </Link>
          <Link to="/CGV" className="bi-footer-link ToU">
            Terms of Use
          </Link>
        </div>
        <div className="bi-footer-line second"></div>
        <div className="bi-footer-lines last">
          <Link to="Data-Processing-Record" className="bi-footer-link data">
            Data Processing Record
          </Link>
          <Link
            to="Unsubscribe-Newsletter"
            className="bi-footer-link unsub-newsletter"
          >
            Unsubscribe of the newsletter
          </Link>
        </div>
      </section>
    </section>
  );
}

export default Footer;
