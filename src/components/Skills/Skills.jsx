import React from "react";
import "./skills.css";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { SiNodedotjs, SiMaterialui ,SiBootstrap,SiTailwindcss, SiFirebase} from "react-icons/si";
import {IoLogoJavascript} from 'react-icons/io';
const Skills = () => {
  return (
    <section id="skills">
      <h5 className="text__subtitle">Habilidades</h5>
      <h2>Tecnologías</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <DiHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiBootstrap className="experience__details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMaterialui className="experience__details-icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className="experience__details-icon" />
              <div>
                <h4>TailWind CSS</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiNodedotjs className="experience__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
            <article className="experience__details">
              <SiFirebase className="experience__details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
