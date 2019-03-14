import React from 'react'
import './Noticia.scss';
import Moment from 'react-moment';

export default props => {
    const renderRows = () => {
        const list = props.list || []
        
        const ordenada = list
        ordenada.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));
              
        return ordenada.map(item => (
            <a href={"#/noticia/"+ item.id } className="noticia" key={item.id}>
                <img className="noticia-destaque" src={ item.imagemCapa }  alt="destaque" />
                <div className="noticia-info">
                    
                    <div className="noticia-chapeu">
                        {item.chapeu} {item.id}
                        <p className="data">
                            <Moment format="DD/MM/YYYY">
                                {item.created_at}
                            </Moment>
                        </p>
                    </div>
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