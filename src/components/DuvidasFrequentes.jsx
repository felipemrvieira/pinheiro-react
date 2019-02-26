import React, { Component } from 'react';

import Duvidas from './template/DuvidasFrequentes/Index';
import BannerPrincipal from './template/BannerPrincipal';
import OrgaosDefesa from './template/OrgaosDefesa';


class DuvidasFrequentes extends Component {
  render() {
    return (
      <div>
        <BannerPrincipal />
        <OrgaosDefesa />
        <Duvidas />  
      </div>
    );
  }
}

export default DuvidasFrequentes;
