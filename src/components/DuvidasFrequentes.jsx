import React, { Component } from 'react';
import axios from 'axios';

import Duvidas from './template/DuvidasFrequentes/Index';
import BannerPrincipal from './template/BannerPrincipal';
import OrgaosDefesa from './template/OrgaosDefesa';

const URL = 'http://api.itec.al.gov.br/api/v1/duvidas'

class DuvidasFrequentes extends Component {
  constructor(props) {
    super(props)
    this.state = { duvidas: [] }
    this.refresh()
  }

  refresh() {
  axios.get(`${URL}`)
      .then(resp => {
      this.setState({ ...this.state, duvidas: resp.data })
      })
      .catch( err => console.log(err) )
  }

  render() {
    return (
      <div>
        <BannerPrincipal banner={this.props.banner} />
        <OrgaosDefesa />
        <Duvidas duvidas={this.state.duvidas} />  
      </div>
    );
  }
}

export default DuvidasFrequentes;
