import React from "react";
import { Link } from "react-router-dom";
import './Menu.scss'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                Menu:
                <Link to="/">Página inicial</Link>
                <Link to="/Aula01">Aula01 - Elementos</Link>
                <Link to="/Aula02">Aula02 - Lista Itens</Link>
                <Link to="/Aula03">Aula03 - Bootstrap</Link>
                <Link to="/Aula04">Aula04 - Componentes</Link>
                <Link to="/Aula05">Aula05 - State</Link>
                <Link to="/Aula06">Aula06 - Lifecycle</Link>
                <Link to="/Aula07">Aula07 - BreakingBad</Link>
                <Link to="/Aula08">Aula08 - Digimon</Link>
                <Link to="/Aula10">Aula10 - Redux</Link>
                <Link to="/Aula11">Aula11 - Hooks</Link>
                <Link to="/Aula12">Aula12 - Jest</Link>
            </div>
        )
    }
}