import React, { Component } from 'react';
import './Noticias.scss';

class Noticias extends Component {
  render() {
    return (
            <div className="card" id="card-noticias">
                <div className="card-header">
                    <h3 className="titulo-modulo">Notícias</h3>
                </div>
                <div className="card-body">
                    <div className="noticias-container">
                        <a id="link-noticias" href="http://www.agenciaalagoas.al.gov.br/pinheiro" target="_blank"
                        rel="noopener">
                            <img src="images/ultimas-noticias.jpg" alt="Ultimas noticias" />
                        </a>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    <a href="http://www.maceio.al.gov.br/" target="_blank" rel="noopener">Confira aqui as notícias da
                        prefeitura</a>
                    <br/>
                    <a href="http://www.cprm.gov.br/publique/Gestao-Territorial/Prevencao-de-Desastres-Naturais/Acao-Emergencial-no-Bairro-Pinheiro-%28Maceio%2C-AL%29-5344.html"
                        target="_blank" rel="noopener">Confira aqui as notícias da CPRM</a>
                </div>
            </div>
    );
  }
}

export default Noticias;


