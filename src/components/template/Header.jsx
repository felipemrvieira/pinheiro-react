import './Header.scss'
import React from 'react'
import logo from './images/s5_logo.png';

export default props => (
    <header>
        <div className="container header-container">
        <div className="titulo">
            <img src={logo} alt="Logo Alagoas" />
        </div>
        <div className="orgao">
            <h5 className="orgao-titulo">Pinheiro</h5>
        </div>
        <div className="busca">
            <input type="text" name="" id="busca-principal" placeholder="Buscar" />
        </div>
        </div>
    </header>
)