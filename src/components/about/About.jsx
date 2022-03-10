import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward, FaIndustry } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Información</h5>
      <h2>Acerca de mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>+3 Años Codeando</small>
            </article>

            <article className="about__card">
              <FaIndustry className="about__icon" />
              <h5>Empresas</h5>
              <small>3 empresas</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>+10 realizados</small>
            </article>
          </div>

          <p>
            Hola, mi nombre es Alonso Larenas, programador Full Stack con más
            de tres años de experiencia generando código para empresas del sector
            privado y público. Conocimiento en análisis, diseño y desarrollo de
            aplicaciones. Especialista en solución de problemas y trabajo en
            equipo.
          </p>

          <a href="#contact" className="btn btn-primary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
