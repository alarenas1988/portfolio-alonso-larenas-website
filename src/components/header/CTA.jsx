import React from "react";
import './header.css'
import CV from "../../assets/curriculum-alonso.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Descargar CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Hablemos
      </a>
    </div>
  );
};

export default CTA;
