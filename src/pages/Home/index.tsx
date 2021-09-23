import React from 'react'
import { Helmet } from "react-helmet";

import Header from "../../components/Header";
import MainHome from "../../components/MainHome";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Helmet>
        <title>Projeto Vida Plena</title>
      </Helmet>
      <Header />
      <MainHome />
      <Footer />
    </>
  );
}

export default Home;
