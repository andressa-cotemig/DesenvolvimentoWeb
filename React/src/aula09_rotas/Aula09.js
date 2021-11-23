import { Route, BrowserRouter } from "react-router-dom";
import Aula01 from '../aula01_elementos/Aula01';
import Aula02 from '../aula02_lista-itens/Aula02';
import Aula03 from '../aula03_bootstrap/Aula03';
import Aula04 from '../aula04_componentes/Aula04';
import Aula05 from '../aula05_state/Aula05';
import Aula06 from '../aula06_lifecycle/Aula06';
import Aula07 from '../aula07_consumir-api/Aula07';
import Aula08 from '../aula08_consumir-api-axios/Aula08';
import { Aula10 } from "../aula10_redux";
import Aula11 from '../aula11_hooks/Aula11';
import Aula12 from '../aula12_testes/Aula12';
import Menu from "./Menu/Menu";
import './Aula09.scss';

const Routes = () => {
  return (
    <div className="rotas">
      <BrowserRouter>
        <Menu />
        <Route path="/" exact component={Aula01} />
        <Route path="/Aula01" component={Aula01} />
        <Route path="/Aula02" component={Aula02} />
        <Route path="/Aula03" component={Aula03} />
        <Route path="/Aula04" component={Aula04} />
        <Route path="/Aula05" component={Aula05} />
        <Route path="/Aula06" component={Aula06} />
        <Route path="/Aula07" component={Aula07} />
        <Route path="/Aula08" component={Aula08} />
        <Route path="/Aula10" component={Aula10} />
        <Route path="/Aula11" component={Aula11} />
        <Route path="/Aula12" component={Aula12} />
      </BrowserRouter>
    </div>
  )
}

export default Routes;
