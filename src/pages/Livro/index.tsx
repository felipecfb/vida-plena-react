import React from 'react';
import {Helmet} from "react-helmet";

import Header from '../../components/Header';
import MainLivro from '../../components/MainLivro';

function Livro(){
    return (
        <><Helmet>
            <title>Projeto Vida Plena - Livro</title>
        </Helmet>
        <Header />
        <MainLivro />
        </>
    )
}

export default Livro;