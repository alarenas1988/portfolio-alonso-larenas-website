import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9bmzvou",
        "template_7ohcsf3",
        form.current,
        "RO7rjh_Qb-jIbxsCJ"
      )
      .then(
        (result) => {
          alert(result.text+', Mensaje enviado exitosamente');
        },
        (error) => {
          alert(error.text);
        }
      );
    
      e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Ponerse en contacto</h5>
      <h2>Contáctame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>contacto@alonso-larenas.cl</h5>
            <a href="mailto:contacto@alonso-larenas.cl" target="_blank">
              Enviar mensaje
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Alonso Larenas Medina</h5>
            <a href="https://m.me/alonso.larenas.medina" target="_blank">
              Enviar mensaje
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+56945572426</h5>
            <a href="https://wa.me/56945572426" target="_blank">
              Enviar mensaje
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Ingrese nombre y apellidos"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ingrese email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Ingrese mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
