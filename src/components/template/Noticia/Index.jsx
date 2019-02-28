import React, { Component } from 'react';
import axios from 'axios'
import './Noticia.scss';
import Noticia from './Noticia';

const URL = 'http://api.itec.al.gov.br/api/v1/noticias'

class Noticias extends Component {
    
    constructor(props) {
        super(props)
        this.state = { materia: [] }
        this.refresh()
    }

    
    
    refresh() {
        axios.get(`${URL}/${this.props.id}`)
            .then(resp => {
                this.setState({ ...this.state, materia: resp.data })

            })
            .catch( err => console.log(err) )
    }

    render() {
        // console.log(this.state.materia.titulo)

        return (
            <section id="plano-contingencia" className="container">
                <div className="row">
                    <div id="cabecalho-modulo" className="col-md-12">
      
                        <div className="card" id="">
                            <div className="card-header">
                                <p className="chapeu">{this.state.materia.chapeu}</p>   
                                <h3 className="titulo">{this.state.materia.titulo}</h3>
                                <p className="intro">{this.state.materia.intro}</p>
                            </div>
                            <div className="card-body">
                                <div className="noticia-container">
                                    <Noticia materia={this.state.materia}/>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <a href="http://www.maceio.al.gov.br/" target="_blank" rel="noopener noreferrer">Confira aqui as notícias da
                                    prefeitura</a>
                                <br/>
                                <a href="http://www.cprm.gov.br/publique/Gestao-Territorial/Prevencao-de-Desastres-Naturais/Acao-Emergencial-no-Bairro-Pinheiro-%28Maceio%2C-AL%29-5344.html"
                                    target="_blank" rel="noopener noreferrer">Confira aqui as notícias da CPRM</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Noticias;


