import React from "react";

import "./MainLogin.css";
import Logo from "../../assets/logo.png";
import ImgLogin from "../../assets/img-login.svg"

function MainLogin() {
  return (
    <>
      <main className="LoginMain">
        <section className="LoginContainer">
          <div className="LoginContainer1">
            <a href="/">
              <img src={Logo} alt="" className="LoginLogo" />
            </a>
            <h2>Login Plataforma</h2>
            <form action="/auth/admin/painel" method="post">
              <label htmlFor="username">E-mail</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="you@example.com"
              />
              <label htmlFor="pass">Senha</label>
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Digite sua senha"
              />
              <button type="submit" className="LoginButton">
                Entrar
              </button>
            </form>
          </div>
          <div className="LoginContainer2">
            <img src={ImgLogin} alt="" />
          </div>
        </section>
      </main>
    </>
  );
}

export default MainLogin;
