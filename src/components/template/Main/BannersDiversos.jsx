import React from 'react'
import './BannersDiversos.scss';

import aplicativo from './images/aplicativo.png';
import duvidas from './images/duvidas.png';


export default props => {
    
    return (
        <section id="banners-diversos" className="container">
            <div className="row linha-banners">
                <div id="banner1" className="col-md-6">
                    <a href="perguntas-e-respostas.html">
                        <img src={duvidas} alt="duvidas" />
                    </a>
                </div>
                <div id="banner2" className="col-md-6">
                    <a href="#">
                        <img src={aplicativo} alt="aplicativo" />
                    </a>
                </div>
            </div>
        </section>
        
    );
}