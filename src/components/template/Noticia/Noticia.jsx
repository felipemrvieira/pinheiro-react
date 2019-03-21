import React from 'react'
import './Noticia.scss';
import { Markup } from 'interweave';

export default props => {
    const materia = props.materia || "";
    
    return (
        <div>
            <div className="noticia">
                <img className="noticia-capa" src={ materia.imagemCapa }  alt="destaque" />
                <div className="noticia-autoriaImagem">
                    <p>
                        {materia.autoriaImagem}
                    </p>
                </div>
                <div className="noticia-texto">
                    <Markup content={materia.texto} />
                </div>
            </div>
        </div>
        
    );
}