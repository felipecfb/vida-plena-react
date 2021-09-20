import React from 'react';
import {Helmet} from "react-helmet";

import MainPlataforma from '../../components/MainPlataforma';

function Plataforma(){
    return (
        <><Helmet>
            <title>Projeto Vida Plena - Plataforma</title>
        </Helmet>
        <MainPlataforma />
        </>
    )
}

export default Plataforma;