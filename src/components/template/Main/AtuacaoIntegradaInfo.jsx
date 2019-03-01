import React, { Component } from 'react';
import './AtuacaoIntegrada.scss';
import { Markup } from 'interweave';


export default class AtuacaoIntegrada extends Component {
    constructor(props) {
        super(props)
    }
 
    render() {
        const renderRows = () => {
            const info = this.props.info || []
            return info.map(item => (
                   
                <div className="pergunta-resposta" key={item.id}>
                    <a className="pergunta" 
                    data-toggle="collapse" 
                    href={"#perg"+item.id} 
                    role="button" 
                    aria-expanded="false"
                    aria-controls={"perg"+item.id}>
                    {item.titulo}
                    </a>
                    <div className="resposta collapse" id={"perg"+item.id}>   
                        <div>
                            <Markup content={ item.texto } />
                        </div>  
                    </div>
                    <hr />
                </div>

            ))
        }

      return(
        <div>
            {renderRows()}
        </div>
        )
    }
}