import React from 'react'
import './Noticia.scss';
import Moment from 'react-moment';
import moment from 'moment';


export default props => {
    const renderRows = () => {
        const list = props.list || []
        
        let sorted = list.sort(function(a, b) {
            b = moment(b.created_at);
            a = moment(a.created_at);
           
            return a>b ? -1 : a<b ? 1 : 0;
        });
              
        return sorted.map(item => (
            <a href={"#/noticia/"+ item.id } className="noticia" key={item.id}>
                <img className="noticia-destaque" src={ item.imagemCapa }  alt="destaque" />
                <div className="noticia-info">
                    
                    <div className="noticia-chapeu">
                        {item.chapeu}
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