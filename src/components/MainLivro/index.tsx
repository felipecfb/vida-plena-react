import React from "react";

import "./MainLivro.css";

import ImgBook from "../../assets/book.svg";
import Livro from "../../assets/livro.png";

function MainLivro() {
  return (
    <>
      <main className="LivroMain">
        <div className="LivroSection1">
          <div className="LivroSection1Titulo">
            <h1>QUEM SOU?</h1>
            <p>de Maria Angélica Roma</p>
          </div>
          <div className="LivroSection1Img">
            <img src={ImgBook} alt="" />
          </div>
        </div>

        <div className="LivroHr">
          <hr />
        </div>

        <div className="LivroSection2">
          <div className="LivroSection2Img">
            <img src={Livro} alt="" />
          </div>
          <div className="LivroSection2Texto">
            <p>
              Você sabia que um dos itens para a plenitude de sua vida começa
              com o autoconhecimento? Você se conhece o suficiente para tomar
              decisões sábias em sua vida? Você tem bom relacionamento
              interpessoal? Você tem mais sucessos do que fracassos em sua vida?
              Você se sente uma pessoa capaz de decidir sua vida com força e
              coragem? Você é uma pessoa plena? Saiba que a maior
              responsabilidade de sua vida é a sua vida. Não deixe ninguém ou
              nada decidir algo em sua vida que é de importância vital. Você
              pode escolher ter cada dia pleno com escolhas conscientes ou
              deixar a vida e outras pessoas escolherem por você.
              <strong>É VOCÊ QUE DECIDE!</strong>
              Tudo começa ao você saber exatamente “QUEM É VOCÊ”. Esse livro foi
              feito para proporcionar a você a condição do autoconhecimento e
              conseqüente autoestima equilibrada.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainLivro
