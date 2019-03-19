import React from 'react'
import './TermosDeUso.scss';
import { Markup } from 'interweave';



export default props => {
   
    return (
        <section id="plano-contingencia" className="container">
        <div className="row">
  
          <div id="cabecalho-modulo" className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="titulo-modulo">
                { props.plano.titulo }
                </h3>
              </div>
            </div>
          </div>
  
          <div className="col-md-12">
            <div className="card submodulo">
  
              <div className="card-body">
                <div className="descricao-plano">
                  <div className="resposta">
                    <Markup content={ props.plano.texto } /> 
                  </div>
                </div>
  
              </div>
            </div>
          </div>
  
        </div>
      </section>
        
    );
}