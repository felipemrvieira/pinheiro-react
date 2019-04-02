import React, { Component } from 'react';
import './MapaInstabilidade.scss';

class MapaInstabilidade extends Component {
  render() {
    return (
        <div className="card" id="card-mapa">
            <div className="card-header">
              <h3 className="titulo-modulo">Mapa de Evacuação</h3>
              <p className="descricao-modulo">Veja abaixo os pontos de encontro em caso de evacuação do bairro</p>
            </div>
            <div className="card-body">
              <div id="mapa">
                <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1YdIOOoJT1XqqFzeWHA8hOTI0EauJb4tv" width="100%"
                  title="Mapa de instabilidade"></iframe>
              </div>
            </div>
            <div className="card-footer text-muted">
              <a href="http://rigeo.cprm.gov.br/jspui/bitstream/doc/20610/6/mapa_feicoes_bairro_pinheiro_final.pdf"
                target="_blank" rel="noopener noreferrer">Confira aqui o Mapa de Feições da CPRM</a>
            </div>
        </div>
    );
  }
}

export default MapaInstabilidade;


