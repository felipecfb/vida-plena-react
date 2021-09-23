import React from 'react';
import {Helmet} from "react-helmet";

import Header from '../../components/Header';
import MainLivro from '../../components/MainLivro';
import Footer from "../../components/Footer";

function Livro(){
    return (
        <><Helmet>
            <title>Projeto Vida Plena - Livro</title>
        </Helmet>
        <Header />
        <MainLivro />
        <Footer />
        </>
    )
}

export default Livro;