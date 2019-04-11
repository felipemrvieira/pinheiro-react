import React, { Component } from 'react';
import './BannerPrefeitura.scss';
import axios from 'axios';

const URL = 'http://api.itec.al.gov.br/api/v1/prefeitura/banners';

class BannerPrefeitura extends Component {
    constructor(props) {
        super(props)
        this.state = { banner: {}, bannerMobile:{}, link:{} }
        this.getImages()
    }

    getImages() {
        axios.get(`${URL}`)
        .then(resp => {
          this.setState({ ...this.state, 
            banner: resp.data[0].imagem, 
            bannerMobile: resp.data[0].imgMobile,
            link: resp.data[0].link,
            descricao: resp.data[0].descricao,
          })
        })
        .catch( err => console.log(err) )
    }
  
  render() {
    console.log(this.state)

    const link = this.state.link;
    const banner = this.state.banner;
    const bannerMobile = this.state.bannerMobile;
    const descricao = this.state.descricao;


    return (
       <section id="banner-prefeitura" className="container">
            <div className="row">
                <div className="col-lg-12">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        {/* <picture>
                            <source media="(max-width: 600px)" srcSet={banner} />
                             <img src={banner} alt="Ações da Prefeitura de Maceió" />
                        </picture> */}
                        <picture>
                            <source media="(max-width: 600px)" srcSet={bannerMobile} />
                            <img src={banner} alt={descricao}  />
                        </picture>
                    </a>
                </div>
            </div>
        </section>
    );
  }
}

export default BannerPrefeitura;


