import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Livro from './pages/Livro';
import Plataforma from './pages/Plataforma';
import Login from './pages/Login';


function Routes(){
    return (
        <BrowserRouter>

        <Route  path="/" exact component={Home}/>
        <Route  path="/sobre" component={Livro}/>
        <Route  path="/login" component={Login}/>
        <Route  path="/plataforma" component={Plataforma}/>
        </BrowserRouter>
    )
}

export default Routes;