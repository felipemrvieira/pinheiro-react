import React, { Component } from 'react';
import './BannerPrincipal.scss';

// import banner from  "../images/podcast.png";


class BannerPrincipal extends Component {
  
  render() {
    const bannerStyle = { backgroundImage: `url(${this.props.banner})` };
    return (
        <section id="banner-principal" style={bannerStyle} >
            <div className="row container">
                <div className="col-lg-12">
                </div>
            </div>
        </section>
    );
  }
}

export default BannerPrincipal;


