import React from 'react';
import { Markup } from 'interweave';
import './DuvidasFrequentes.scss';

export default props => {
    const renderRows = () => {
        const duvidas = props.duvidas || []
        return duvidas.map(item => (

            <div className="pergunta-resposta" key={item.id}>
                <a className="pergunta" data-toggle="collapse" href={"#pergunta"+item.id} role="button" aria-expanded="false"
                aria-controls="pergunta1">
                    <Markup content={item.pergunta} />
                </a>
                <div className="resposta collapse" id={"pergunta"+item.id}>
                    <div>
                        <Markup content={item.resposta} />
                    </div>
                </div>
                <hr />
        </div>
        ))
    }

    return (
        <div>
            {renderRows()}
        </div>
        
    );
}