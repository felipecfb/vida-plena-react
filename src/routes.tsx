import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Livro from './pages/Livro';
import Plataforma from './pages/Plataforma';


function Routes(){
    return (
        <BrowserRouter>

        <Route  path="/" exact component={Home}/>
        <Route  path="/sobre" component={Livro}/>
        <Route  path="/plataforma" component={Plataforma}/>
        </BrowserRouter>
    )
}

export default Routes;