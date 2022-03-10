import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio-mi-portfolio-personal.png";
import IMG2 from "../../assets/portfolio-clon-twitter.png";
import IMG3 from "../../assets/portfolio-mi-compensacion-sernac.png";
import IMG4 from "../../assets/portfolio-portal-sernac.png";
import IMG5 from "../../assets/portfolio-ascc-corfo.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mis últimos trabajos</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Mi portfolio personal</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/alarenas1988/portfolio-alonso-larenas-website"
              target="_blank"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://portfolio.alonso-larenas.cl"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Twitter Demo</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/alarenas1988/clon-twitter"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://alarenas1988.github.io/clon-twitter/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Mi Compensación</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn disabled">
              GitHub
            </a>
            <a
              href="https://www.micompensacion.cl/#/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Portal del consumidor</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn disabled">
              GitHub
            </a>
            <a
              href="https://www.sernac.cl/app/consumidor/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Sistema de gestión de procesos de negocio de la ASCC</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/AgenciaSustentabilidadyCambioClimatico/accion"
              className="btn"
            >
              GitHub
            </a>
            <a href="#" className="btn btn-primary disabled" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
