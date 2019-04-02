import React, { Component } from 'react';
import './AreasAtingidas.scss';
import axios from 'axios';
import { Markup } from 'interweave';


const URL = 'http://api.itec.al.gov.br/api/v1/areas'

class AreasAtingidas extends Component {
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
    
    render(){
        return (
            <section id="areas-afetadas" className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <a className="card-header" 
                            data-toggle="collapse" 
                            href="#collapseArea" 
                            role="button" 
                            aria-expanded="false"
                            aria-controls="collapseArea">
                            <h3 className="titulo-modulo">
                                {this.state.info.titulo}
                            </h3>
                            </a>
                            <div className="card-body collapse" id="collapseArea">
                                <div className="">
                                    <div className="">
                                        <Markup content={this.state.info.texto} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        );
    }
}

export default AreasAtingidas;
