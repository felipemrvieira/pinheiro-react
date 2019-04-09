import React, { Component } from 'react';
import axios from 'axios';

import Termo from './template/TermosDeUso/Index';
import BannerPrincipal from './template/BannerPrincipal';

const URL = 'http://api.itec.al.gov.br/api/v1/termos'

class TermosDeUso extends Component {
  constructor(props) {
    super(props)
    this.state = { plano: {} }
    this.refresh()
  }

  refresh() {
  axios.get(`${URL}`)
      .then(resp => {
      this.setState({ ...this.state, plano: resp.data[0] })
      })
      .catch( err => console.log(err) )
  }

  render() {
    return (
      <div>
        <BannerPrincipal banner={this.props.banner} link={this.props.link}/>
        <Termo plano={this.state.plano} />  
      </div>
    );
  }
}

export default TermosDeUso;
