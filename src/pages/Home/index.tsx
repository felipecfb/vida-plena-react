import React from 'react'
import { Helmet } from "react-helmet";

import Header from "../../components/Header";
import MainHome from "../../components/MainHome";

function Home() {
  return (
    <>
      <Helmet>
        <title>Projeto Vida Plena</title>
      </Helmet>
      <Header />
      <MainHome />
    </>
  );
}

export default Home;
