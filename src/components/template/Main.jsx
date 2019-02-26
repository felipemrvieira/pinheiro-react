import React, { Component } from 'react';

import BannerPrincipal from './BannerPrincipal';
import OrgaosDefesa from './OrgaosDefesa';
import TelefonesUteis from './TelefonesUteis';
import BannerContingencia from './BannerContingencia';
import MapaInstabilidade from './MapaInstabilidade';
import Noticias from './Noticias';
import AreasAtingidas from './AreasAtingidas';
import BannersDiversos from './BannersDiversos';


class Main extends Component {
  render() {
    return (
        <main>
            <BannerPrincipal />
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
            <AreasAtingidas />
            <BannersDiversos />
        </main>
    );
  }
}

export default Main;
