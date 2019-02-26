import './Nav.scss'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-light" id="nav-principal">
        <div className="container">

        <button id="hamburger-nav-principal" className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Início</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/plano-de-contingencia">Plano de Contingência</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/duvidas-frequentes">Dúvidas Frequentes</Link>
                </li>
            </ul>
            <div id="nav-social">
                <a href="https://www.facebook.com/GovernoAlagoas/" target="_blank" rel="noopener noreferrer">
                    <div className="nav-social-icon" id="nav-facebook"></div>
                </a>
                <a href="https://www.youtube.com/channel/UCdSzm3SBIfjIKeUH0vnnqAA" target="_blank" rel="noopener noreferrer">
                    <div className="nav-social-icon" id="nav-youtube"></div>
                </a>
                <a href="https://twitter.com/GovernoAlagoas" target="_blank" rel="noopener noreferrer">
                    <div className="nav-social-icon" id="nav-twitter"></div>
                </a>
                <a href="http://www.agenciaalagoas.al.gov.br/solicitacao-de-informacao" target="_blank" rel="noopener noreferrer">
                    <div className="nav-social-icon" id="nav-info"></div>
                </a>
            <div className="nav-social-icon" id="nav-eouv"></div>
            </div>

        </div>
        </div>
    </nav>
)