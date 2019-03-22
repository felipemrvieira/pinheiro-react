import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import axios from 'axios';

import Index from './components/Index';
import TermosDeUso from './components/TermosDeUso';

import PlanoContingencia from './components/PlanoContingencia';
import DuvidasFrequentes from './components/DuvidasFrequentes';
import Noticia from './components/Noticia';

const URL = 'http://api.itec.al.gov.br/api/v1/banners';


export default class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = { banner: {} }
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}`)
            .then(resp => {
                this.setState({ ...this.state, banner: resp.data[0] })
            })
            .catch( err => console.log(err) )
        }
        
        render() {
        const img = this.state.banner.imagem;
        
        const ComponentePlanoContingencia = () => (
            <PlanoContingencia banner={img} />
        );
        const ComponenteTermosDeUso = () => (
            <TermosDeUso banner={img} />
        );

        const ComponenteDuvidasFrequentes = () => (
            <DuvidasFrequentes banner={img} />
        );
        const ComponenteNoticia = ({ match }) => (
            <Noticia id={match.params.id} banner={img} />
        );

        return(
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/termos-de-uso' component={ComponenteTermosDeUso} />
                <Route path='/plano-de-contingencia' component={ComponentePlanoContingencia} />
                <Route path='/duvidas-frequentes' component={ComponenteDuvidasFrequentes} />
                <Route path='/noticia/:id' component={ComponenteNoticia} />
                <Redirect from='*' to='/' />
            </Switch>
        )
    }
}
