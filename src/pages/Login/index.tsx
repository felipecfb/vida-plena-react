import React from 'react';
import {Helmet} from "react-helmet";

import MainLogin from '../../components/MainLogin';

function Login(){
    return (
        <><Helmet>
            <title>Projeto Vida Plena - Login</title>
        </Helmet>
        <MainLogin />
        </>
    )
}

export default Login;