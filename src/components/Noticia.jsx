import React, { Component } from 'react';

import Noticia from './template/Noticia/Index';
import BannerPrincipal from './template/BannerPrincipal';
import OrgaosDefesa from './template/OrgaosDefesa';


class CompNoticia extends Component {
  render() {
    return (
      <div>
        <BannerPrincipal />
        <OrgaosDefesa />
        <Noticia />  
      </div>
    );
  }
}

export default CompNoticia;
