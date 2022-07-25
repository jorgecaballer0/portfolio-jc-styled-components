import React from "react";
import "./about.css";
import ME from "../../assets/img/about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5 className="text__subtitle">Introducción</h5>
      <h2>Sobre Mí</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="about-me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>Dev. Jr - 7 meses de práctica</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Soporte</h5>
              <small>Online 24/7</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>6 Completados</small>
            </article>
          </div>
          <p>
            Tengo 23 años, vivo en Bs. As, Argentina y me especializo como
            desarrollador Frontend Jr.
            <br />
            Estudié en Coderhouse pero sigo aprendiendo más en otras
            plataformas y actualmente me encuentro en búsqueda de mi primer
            trabajo IT.
            <br />
            Soy una persona autodidacta, apasionada por el desarrollo web
            y la tecnología, siempre estoy buscando nuevos desafíos y reforzando
            mis habilidades.
          </p>
          <a href="#contact" className="btn btn__primary about__btn">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
