import React from 'react'
import './Noticia.scss';
import Moment from 'react-moment';

import { Markup } from 'interweave';

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(item => (
            <a href={"#/noticia/"+ item.id } className="noticia" key={item.id}>
                <img className="noticia-destaque" src={ item.imagemCapa }  alt="destaque" />
                <div className="noticia-info">
                    
                    <p className="noticia-chapeu">
                    {item.chapeu}
                    <p className="data">
                        <Moment format="DD/MM/YYYY">
                            {item.created_at}
                        </Moment>
                    </p></p>
                    <p className="noticia-titulo">{item.titulo}</p>
                    <p className="noticia-bigode">{item.intro}</p>
                    
                </div>
            </a>
        ))
    }

    return (
        <div>
            {renderRows()}
        </div>
        
    );
}