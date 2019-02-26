import React from 'react';
import { Switch, Route, Redirect } from 'react-router'
import Index from './components/Index';
import PlanoContingencia from './components/PlanoContingencia';
import DuvidasFrequentes from './components/DuvidasFrequentes';


export default props => (
   <Switch>
       <Route exact path='/' component={Index} />
       <Route path='/plano-de-contingencia' component={PlanoContingencia} />
       <Route path='/duvidas-frequentes' component={DuvidasFrequentes} />
       <Redirect from='*' to='/' />
   </Switch>
)