import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5 className="text__subtitle">Servicios</h5>
      <h2>Que puedo ofrecer...</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Diseño Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Puedo diseñar todo tipo de páginas web, para tu emprendimiento o
                empresa. Todo hecho a medida.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Desarrollo de interfaz de usuario.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Desarrollo de páginas web.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Aplicación web adaptada a tus necesidades, de{" "}
                <strong>fácil acceso y manejo</strong>.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Diseño y maquetación de tu sitio web.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Tu sitio web será atractivo y responsive, apto para cualquier
                dispositivo.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Posicionamiento Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Posiciona tu sitio web para que todos los potenciales clientes
                puedan encontrarte facilmente.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mejor posicionamiento en las búsquedas de Google.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Diferentes opciones para cubrir las necesidades de alojamiento
                en la nube de tu sitio web.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Optimización de imágenes y palabras clave para SEO.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Mantenimiento Web</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Realizo mantenimiento web a cualquier tipo de sitio web para
                evitar que falle y tener este siempre en óptimas condiciones.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Actualización de contenido y diseño según tus gustos y
                necesidades para tu sitio web.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mejoras en la interfaz de usuario.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Adaptabilidad a cualquier dispositivo.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Actualizaciones constantes de las tecnologías utilizadas.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
