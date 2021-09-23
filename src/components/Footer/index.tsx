import React from "react";

import "./Footer.css";

import Localizacao from '../../assets/localizacao.svg'
import Facebook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Mail from '../../assets/mail.svg'
import ImgFooter from '../../assets/img-footer.svg'

function Footer() {
  return (
    <>
      <section className="contact">
        <h1>Entre em contato conosco</h1>
        <div className="form-contact">
          <form action="">
            <input type="text" placeholder="Nome Completo" name="" required />
            <input type="text" placeholder="Email" name="" required />
            <input type="text" placeholder="Assunto" name="" required />
            <textarea placeholder="Mensagem" name="" required></textarea>
            <button>Enviar</button>
          </form>
        </div>

        <div className="contact-content">
          <div className="content-1">
            <ul>
              <li>
                <a href="">
                  <img src={Localizacao} alt="" />
                  <span>Residencial dos girassóis, Calda novas - GO</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Facebook} alt="" />
                  <span>/mariaangelicaroma</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Instagram} alt="" />
                  <span>@mariaangelicaroma</span>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={Mail} alt="" />
                  <span>atendimento@mariaangelicaroma.com</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="content-2">
            <img src={ImgFooter} alt="" />
          </div>
        </div>
      </section>
      <footer>
        <span className="copyright">
          &copy; 2021 Smithsons do Brasil - Todos os Direitos Reservados.
        </span>
      </footer>
    </>
  );
}

export default Footer;
