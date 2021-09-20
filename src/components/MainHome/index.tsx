import React from "react";

import './styles.css'

import Meditation from "../../assets/meditation.svg";
import textoImg from "../../assets/image-texto.svg";
import videoImg from "../../assets/image-video.svg";


function MainHome() {
    return (
        <><section className="banner">
            <div className="section-1">
                <div className="section-1-content">
                    <h2>Projeto Vida Plena</h2>
                    <a href="https://www.allprinteditora.com.br/quem-sou"><button>Adquira o nosso livro</button></a>
                </div>
            </div>
            <div className="section-2" id="section-2">
                <img src={Meditation} alt="" />
            </div>
        </section><section className="resume">
                <h1>O que é o projeto?</h1>
                <div className="resume-section">
                    <div className="resume-1"><img src={textoImg} alt="" /></div>
                    <div className="resume-2">
                        <p>
                            Estamos vivendo um tempo de muita complexidade com grandes dificuldades
                            e temores. Essa situação leva a maior parte das pessoas a perderem a
                            esperança num futuro melhor e, pior ainda, de poderem ter uma vida de
                            paz, alegrias e, até, felicidade. A esperança é a mola propulsora para
                            se viver cada dia de forma motivada no objetivo de atingir uma vida
                            melhor. Contudo, como ter esperança num futuro feliz diante de tantas
                            mazelas, catástrofe, pandemia e tantos terrores que constatamos quase
                            que diariamente? Posso garantir a você que é aprendendo a conquistar uma
                            VIDA PLENA. O PROJETO VIDA PLENA tem o poder de treinar cada criatura de
                            Deus para conquistar uma VIDA PLENA. Se você se envolver de corpo, alma
                            e espírito nesse projeto prepare-se para atingir a vida plena e
                            conseqüente felicidade que Deus pode e quer lhe proporcionar
                        </p>
                    </div>
                </div>
            </section><section className="video">
                <div className="video-1"><iframe width="600" height="400" src="https://www.youtube.com/embed/SStJ4xmJImU"></iframe></div>

                <div className="image-video"><img src={videoImg} alt="" /></div>
            </section></>
    )
}

export default MainHome