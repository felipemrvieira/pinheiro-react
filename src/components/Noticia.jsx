import React, { Component } from 'react';

import Noticia from './template/Noticia/Index';
import BannerPrincipal from './template/BannerPrincipal';
import OrgaosDefesa from './template/OrgaosDefesa';


class CompNoticia extends Component {
  render() {
    return (
      <div>
        <BannerPrincipal banner={this.props.banner} link={this.props.link}/>
        <OrgaosDefesa />
        <Noticia id={this.props.id} />  
      </div>
    );
  }
}

export default CompNoticia;
