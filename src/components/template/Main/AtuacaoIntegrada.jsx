import React, { Component } from 'react';
import './AtuacaoIntegrada.scss';
import axios from 'axios';
import AtuacaoIntegradaInfo from './AtuacaoIntegradaInfo';

const URL = 'http://api.itec.al.gov.br/api/v1/atuacao'

export default class AtuacaoIntegrada extends Component {
  constructor(props) {
    super(props)
    this.state = { municipal: [], estadual: [], federal: []  }
    this.refresh()
  }

  listaPrefeitura(item){
    return item.orgao_id === 2;
  }

  listaEstado(item){
    return item.orgao_id === 1;
  }

  listaFederal(item){
    return item.orgao_id === 4;
  }

  refresh() {
    axios.get(`${URL}`)
      .then(resp => {
        const dados = resp.data
        
        const dadosPrefeitura = dados.filter(this.listaPrefeitura)
        this.setState({ ...this.state, municipal: dadosPrefeitura })

        const dadosEstado = dados.filter(this.listaEstado)
        this.setState({ ...this.state, estadual: dadosEstado })

        const dadosFederal = dados.filter(this.listaFederal)
        this.setState({ ...this.state, federal: dadosFederal })
        
      })
      .catch( err => console.log(err) )
  }
    
    render() {
      return(
      <section id="informacoes" className="container">
        <div className="row">
  
          <div id="cabecalho-modulo" className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="titulo-modulo">
                  Atuação Integrada
                </h3>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card submodulo">
              <div className="card-header">
                <h3 className="titulo-submodulo">
                  Prefeitura de Maceió
                </h3>
              </div>
              <div className="card-body">            
                <AtuacaoIntegradaInfo info={this.state.municipal} />
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card submodulo">
              <div className="card-header">
                <h3 className="titulo-submodulo">
                  Governo de Alagoas
                </h3>
              </div>
              <div className="card-body">
                <AtuacaoIntegradaInfo info={this.state.estadual} />
              </div>
            </div>
          </div>
          
  
          <div className="col-md-4">
            <div className="card submodulo">
              <div className="card-header">
                <h3 className="titulo-submodulo">
                  Governo Federal
                </h3>
              </div>
              <div className="card-body">
                <AtuacaoIntegradaInfo info={this.state.federal} />
              </div>
            </div>
          </div>
  
  
        </div>
      </section>
      )
    }
}