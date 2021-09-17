import React from 'react';
import {Helmet} from "react-helmet";

import PageHeader from '../../components/PageHeader';

const Titulo = 'Projeto Vida Plena'

function Home(){
        return (
            <><Helmet>
                <title>Projeto Vida Plena</title>
            </Helmet>
            <PageHeader /></>
        )
    }

export default Home;