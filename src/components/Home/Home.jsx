import React from "react";
import Links from "./Links";
import ME from "../../assets/img/perfil.png";
import "./home.css";
import HomeSocial from "./HomeSocial";
import { BsMouse } from "react-icons/bs";

const Home = () => {
  return (
    <div className="home__container">
      <div className="container home__title">
        <h4>Hola! Mi nombre es</h4>
        <h1 className="text__subtitle-title">Jorge Caballero</h1>
        <h4 className="text-light">Desarrollador Frontend</h4>
        <Links />
        <HomeSocial />
        <div className="home__profile">
          <img src={ME} alt="home__profile" />
        </div>
        <a href="#about" className="scroll__down">
          <BsMouse className="scroll__down-icon" />
          <span className="scroll__down-text">Scroll Down</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
