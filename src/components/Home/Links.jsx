import React from "react";
import CV from "../../assets/pdf/cv-JC.pdf";

const Links = () => {
  return (
    <div className="home__links">
      <a href={CV} className="btn">Descargar CV</a>
      <a href="#contact" className="btn btn-primary">Contactame</a>
    </div>
  );
};

export default Links;
