import React from 'react';
import { Switch, Route, Redirect } from 'react-router'
import Index from './components/Index';


export default props => (
   <Switch>
       <Route exact path='/' component={Index} />
       <Route path='/plano-de-contingencia' component={Index} />
       <Redirect from='*' to='/' />
   </Switch>
)