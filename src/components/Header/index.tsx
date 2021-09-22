import React, { useState } from 'react';
import "./Header.css";
import logo from "../../assets/logo.png";
import openMenuImg from "../../assets/menu.png"
import closeMenuImg from "../../assets/close.png"

function Header() {

  const [ status, setStatus ] = useState('close')

  return (
    <>
    <nav>
    <div
     className="menu-mobile"
      role="button"
       onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
         <ul className="menu">
            <li className={status}></li>
            <li className={status}></li>
            <li className={status}></li>
         </ul>
      </div>
    </nav>
    </>
  );
}


export default Header;