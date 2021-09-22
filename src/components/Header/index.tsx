import React, { useState } from 'react';

import "./Header.css";

import logo from "../../assets/logo.png";
import openMenuImg from '../../assets/menu.png';
import closeMenuImg from '../../assets/close.png';

function Header() {
    const [mostrarMenu, setMostrarMenu] = useState(false);

    console.log(mostrarMenu)

    let menu = document.querySelector('.menuMobile')

    if (mostrarMenu) {
        menu?.classList.add('active')
    } else {
        menu?.classList.remove('active')
    }

    return (
        <><nav className="header-nav">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>

          <div className="header-nav">
                <ul className="header-menu">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Sobre</li></a>
                    <a href="#"><li>Curso</li></a>
                </ul>
            </div>
        
            
            <div className="menuMobileImg">
                <img src={openMenuImg} alt="" onClick={() => setMostrarMenu(!mostrarMenu)} />
            </div>
            <div className="menuMobile">
            <img src={closeMenuImg} alt="" onClick={() => setMostrarMenu(false)} />
                <ul>
                    <li>Home</li>
                    <li>Livro</li>
                    <li>Curso</li>
                </ul>
            </div>
            </nav></>
            
            


    )
}

export default Header;