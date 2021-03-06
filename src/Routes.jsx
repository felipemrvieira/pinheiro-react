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
        this.state = { banner: {}, link: {} }
        this.refresh()
    }

    refresh() {
        axios.get(`${URL}`)
            .then(resp => {
                this.setState({ ...this.state, 
                    banner: resp.data[0].imagem,
                    link: resp.data[0].link, 
                })
            })
            .catch( err => console.log(err) )
        }
        
        render() {
        const img = this.state.banner;
        const link = this.state.link;
        
        const ComponentePlanoContingencia = () => (
            <PlanoContingencia banner={img} link={link} />
        );
        const ComponenteTermosDeUso = () => (
            <TermosDeUso banner={img} link={link} />
        );

        const ComponenteDuvidasFrequentes = () => (
            <DuvidasFrequentes banner={img} link={link} />
        );
        const ComponenteNoticia = ({ match }) => (
            <Noticia slug={match.params.slug} banner={img} link={link} />
        );

        return(
            <Switch>
                <Route exact path='/' component={Index} />
                <Route path='/termos-de-uso' component={ComponenteTermosDeUso} />
                <Route path='/plano-de-contingencia' component={ComponentePlanoContingencia} />
                <Route path='/duvidas-frequentes' component={ComponenteDuvidasFrequentes} />
                <Route path='/noticia/:slug' component={ComponenteNoticia} />
                <Redirect from='*' to='/' />
            </Switch>
        )
    }
}
