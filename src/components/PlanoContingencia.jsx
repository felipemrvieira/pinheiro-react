import React, { Component } from 'react';
import axios from 'axios';

import Plano from './template/PlanoContingencia/Index';
import BannerPrincipal from './template/BannerPrincipal';
import OrgaosDefesa from './template/OrgaosDefesa';

const URL = 'http://api.itec.al.gov.br/api/v1/plano'

class PlanoContingencia extends Component {
  constructor(props) {
    super(props)
    this.state = { plano: {} }
    this.refresh()
  }

  refresh() {
  axios.get(`${URL}`)
      .then(resp => {
      this.setState({ ...this.state, plano: resp.data[0] })
      // console.log(this.state.plano)
      })
      .catch( err => console.log(err) )
  }

  render() {
    return (
      <div>
        <BannerPrincipal />
        <OrgaosDefesa />
        <Plano plano={this.state.plano} />  
      </div>
    );
  }
}

export default PlanoContingencia;
