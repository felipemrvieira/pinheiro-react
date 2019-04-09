import React, { Component } from 'react';
import './OrgaosDefesa.scss';
import axios from 'axios';
import { Markup } from 'interweave';


const URL = 'http://api.itec.al.gov.br/api/v1/telefones'


class OrgaosDefesa extends Component {
    constructor(props) {
        super(props)
        this.state = { telefones: [] }
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}`)
        .then(resp => {
        this.setState({ ...this.state, orgaos: resp.data })
        })
        .catch( err => console.log(err) )
    }

    showPhone(numero, classe){
        if(classe === "prefeitura"){
            // Remove espaço
            numero = numero.replace(/ /g,'')
            return "http://api.whatsapp.com/send?1=pt_BR&phone=5582" + numero
        }
        else{
            return "tel:" + numero
        }

    }


    renderButtons() {
        const orgaos = this.state.orgaos || []
              
        return orgaos.map(orgao => (
            <div className={"orgao-defesa " + orgao.classe} key={orgao.id}>
                <a href={this.showPhone(orgao.numero, orgao.classe)}>
                    <div className="orgao-info">
                        <div className="orgao-telefone">{orgao.numero}</div>
                        <div className="orgao-titulo">{orgao.nome}</div>
                    </div>
                </a>
                <div className="orgao-competencias">
                    <a className="competencia-previa" data-toggle="collapse" href={"#collapseExample" +orgao.id} role="button"
                    aria-expanded="false" aria-controls={"collapseExample" +orgao.id}>
                        <Markup content={orgao.intro || "Informações"} />
                    </a>
                
                    <div className="collapse" id={"collapseExample" +orgao.id}>
                        <Markup content={orgao.competencias} />
                    </div>
                </div>
            </div>
        ))
    }


  render() {
    return (
        <section id="orgaos-defesa" className="container">
            <div className="row ">
                <div className="col-lg-12">
                <div id="telefones">
                    <span>Telefones Úteis</span>
                </div>
                <div className="discar">
                    Toque para discar!
                </div>
                <div id="orgaos-container">
                    {this.renderButtons()}
                </div>
                </div>
            </div>
        </section>

    );
  }
}

export default OrgaosDefesa;


