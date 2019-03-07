import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './BannerContingencia.scss';
import banner from '../images/plano-contingencia.png';
import bannerMobile from '../images/plano-contingencia-mobile.jpg';


class BannerContingencia extends Component {
  render() {
    return (
        <section id="banner-plano-contingencia" className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Link to="/plano-de-contingencia">
                        <picture>
                            <source media="(max-width: 600px)" srcSet={bannerMobile} />
                            <img src={banner} alt="Plano de contingência" />
                        </picture>
                    </Link>
                </div>
            </div>
        </section>
    );
  }
}

export default BannerContingencia;


