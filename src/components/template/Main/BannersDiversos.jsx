import React from 'react'
import './BannersDiversos.scss';
import { Link } from 'react-router-dom'


import aplicativo from '../images/aplicativo.png';
import duvidas from '../images/duvidas.png';


export default props => {
    
    return (
        <section id="banners-diversos" className="container">
            <div className="row linha-banners">
                <div id="banner1" className="col-md-6">
                    <Link to="/duvidas-frequentes">
                        <img src={duvidas} alt="duvidas" />
                    </Link>
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