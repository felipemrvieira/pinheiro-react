import React, { Component } from 'react';
import axios from 'axios';

import TelefonesUteis from './TelefonesUteis';
import BannerContingencia from './BannerContingencia';
import MapaInstabilidade from './MapaInstabilidade';
import Noticias from './Noticias';
import AreasAtingidas from './AreasAtingidas';
import BannersDiversos from './BannersDiversos';
import AtuacaoIntegrada from './AtuacaoIntegrada';
import BannerPrincipal from './BannerPrincipal';
import OrgaosDefesa from './OrgaosDefesa';
import BannerPrefeitura from './BannerPrefeitura';

const URL = 'http://api.itec.al.gov.br/api/v1/banners';


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = { banner: {}, link:{} }
    this.refresh()
  }
  
  refresh() {
    axios.get(`${URL}`)
    .then(resp => {
      this.setState({ ...this.state, 
        banner: resp.data[0].imagem, 
        link: resp.data[0].link,
      })
    })
    .catch( err => console.log(err) )
  }
      
    render() {
      const img = this.state.banner;
      const link = this.state.link;
      return (
          <main>
              <BannerPrincipal banner={img} link={link}/>
              <OrgaosDefesa />
              <TelefonesUteis />
              <BannerContingencia/>
              <section id="mapa-noticias" className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <MapaInstabilidade />
                  </div>
                  <div className="col-lg-6">
                    <Noticias />
                  </div>
                </div>
              </section>
              <BannerPrefeitura />
              <AreasAtingidas />
              <BannersDiversos />
              <AtuacaoIntegrada />
          </main>
      );
  }
}

export default Main;
