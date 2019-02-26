import React, { Component } from 'react';

import Plano from './template/PlanoContingencia/Index';
import BannerPrincipal from './template/BannerPrincipal';
import OrgaosDefesa from './template/OrgaosDefesa';


class PlanoContingencia extends Component {
  render() {
    return (
      <div>
        <BannerPrincipal />
        <OrgaosDefesa />
        <Plano />  
      </div>
    );
  }
}

export default PlanoContingencia;
