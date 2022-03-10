import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

var time = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ALONSO LARENAS FULLSTACK DEVELOPER
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Acerca de mí</a>
        </li>
        <li>
          <a href="#experience">Experiencia</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contáctame</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/alonso.larenas.medina/">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/alarenas1988/">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/LARENASALONSO">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Alonso Larenas Portfolio Website. Todos los derechos
          reservados. {time}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
