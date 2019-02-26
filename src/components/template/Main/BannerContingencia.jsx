import React, { Component } from 'react';
import './BannerContingencia.scss';
import banner from './images/plano-contingencia.png';
import bannerMobile from './images/plano-contingencia-mobile.jpg';


class BannerContingencia extends Component {
  render() {
    return (
        <section id="banner-plano-contingencia" className="container">
            <div className="row">
                <div className="col-lg-12">
                    <a href="plano-de-contingencia.html">
                        <picture>
                            <source media="(max-width: 600px)" srcSet={bannerMobile} />
                            <img src={banner} alt="Plano de contingência" />
                        </picture>
                    </a>
                </div>
            </div>
        </section>
    );
  }
}

export default BannerContingencia;


