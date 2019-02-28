import React from 'react';
import { Switch, Route, Redirect } from 'react-router'

import Index from './components/Index';
import PlanoContingencia from './components/PlanoContingencia';
import DuvidasFrequentes from './components/DuvidasFrequentes';
import Noticia from './components/Noticia';


export default props => (
    <Switch>
        <Route exact path='/' component={Index} />
        <Route path='/plano-de-contingencia' component={PlanoContingencia} />
        <Route path='/duvidas-frequentes' component={DuvidasFrequentes} />
        <Route path='/noticia/:id' component={Child} />
        <Redirect from='*' to='/' />
    </Switch>
)

const Child = ({ match }) => (
    <Noticia id={match.params.id} />
  );