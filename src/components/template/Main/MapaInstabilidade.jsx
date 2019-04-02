import React, { Component } from 'react';
import './MapaInstabilidade.scss';
import axios from 'axios';
import { Markup } from 'interweave';


const URL = 'http://api.itec.al.gov.br/api/v1/mapa'

class MapaInstabilidade extends Component {
  constructor(props) {
    super(props)
    this.state = { info: [] }
    this.refresh()
  }

  refresh() {
    axios.get(`${URL}`)
    .then(resp => {
    this.setState({ ...this.state, info: resp.data[0] })
    })
    .catch( err => console.log(err) )
  }

  render() {
    return (
        <div className="card" id="card-mapa">
            <div className="card-header">
              <h3 className="titulo-modulo">{this.state.info.titulo}</h3>
              <p className="descricao-modulo">
                <Markup content={this.state.info.texto} />
              </p>
            </div>
            <div className="card-body">
              <div id="mapa">
                <iframe src={this.state.info.link} width="100%" title="Mapa de instabilidade"></iframe>
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


