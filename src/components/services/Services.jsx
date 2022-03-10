import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desarrollar la arquitectura del sitio web de la interfaz.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Diseñar las interfaces de usuario y otros elementos front-end.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Desarrollar aplicaciones back-end.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Crear servidores y bases de datos para correcta funcionalidad.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Asegurar funcionamiento de la aplicación o sitio en teléfonos
                móviles.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Asegurar la velocidad y la escalabilidad del sitio web.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Administración de proyectos complejos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Asesoramiento profesional.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Creación de Contenido</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creación de material para cursos de desarrollo web,
                programación, entre otros.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Investigación y exploración de nuevas plataformas para la
                enseñanza de nuevo contenido y material educativo.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creación de diapositivas para cursos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Entrega de material para el dictado de lecciones.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Coordinar con el equipo educativo las rutas de aprendizaje a
                desarrollarse y asegurarse que se haga de la manera correcta.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Capacitar a docentes en material nuevo que ha desarrollado.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Coordinar en equipo asignación de talleres a desarrollar.</p>
            </li>
          </ul>
        </article>
        {/* END OF CREATOR CONTENT */}
      </div>
    </section>
  );
};

export default Services;
