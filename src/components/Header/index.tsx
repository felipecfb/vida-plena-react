import React from 'react';
import "./Header.css";
import logo from "../../assets/logo.png";
import openMenuImg from "../../assets/menu.png"
import closeMenuImg from "../../assets/close.png"

function Header() {
  return (
    <nav className="header-nav">
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="header-nav-links">
          <div className="header-menu">
              <a href="/">Home</a>
              <a href="/sobre">Sobre</a>
              <a href="/login">Curso</a>
          </div>
      </div>

      <div className="menu-mobile">
      <img src={openMenuImg} alt="" />
      <div className="menu-hamburguer">
        <div className="menu-hamburguer-close">
        <img src={closeMenuImg} alt="" />
        </div>
        <div className="menu-hamburguer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Projeto</a></li>
            <li><a href="#">Livro</a></li>
            <li><a href="#">Curso</a></li>
          </ul>
        </div>
      </div>
    </div>
    </nav>
  );
}


export default Header;