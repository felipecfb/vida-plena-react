import React from 'react'
import { Helmet } from "react-helmet";

import Header from "../../components/Header";
import MainHome from "../../components/MainHome";

const Titulo = "Projeto Vida Plena";

function Home() {
  return (
    <>
      <Helmet>
        <title>{Titulo}</title>
      </Helmet>
      <Header />
      <main>
        <MainHome />
      </main>
    </>
  );
}

export default Home;
