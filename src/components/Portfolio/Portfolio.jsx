import React from "react";
import "./portfolio.css";
import { portfolio } from "../../utils/portfolio";
import { AiOutlineArrowRight } from "react-icons/ai";

const Porfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text__subtitle">Portfolio</h5>
      <h2>Últimos Proyectos</h2>

      <div className="container portfolio__container">
        {portfolio.map(({ id, image, title, github, liveDemo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-links">
                <a href={liveDemo} rel="noreferrer noopener" target="_blank">
                  Ir al sitio
                  <AiOutlineArrowRight/>
                </a>
                <a href={github} rel="noreferrer noopener" target="_blank">
                  Repositorio
                  <AiOutlineArrowRight />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Porfolio;
