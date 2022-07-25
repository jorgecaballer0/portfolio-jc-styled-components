/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import LOGO from "../../assets/img/Bg-Logo/logo.ico";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <a href="#">
          <img src={LOGO} alt="Logo" />
        </a>
      </div>
      <ul className="permalinks">
        <li>
          <a href="#about">Sobre Mí</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonios</a>
        </li> */}
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://github.com/jorgecaballero98">
          <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/jorgecaballero98/">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/jorge.caballero98">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Jlc98_">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jorge Caballero - Todos los derechos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
