import React from 'react'
import './DuvidasFrequentes.scss';
import PerguntaResposta from './PerguntaResposta';

export default props => {
    return (
      <section id="perguntas-e-respostas" className="container">
      <div className="row">

        <div id="cabecalho-modulo" className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="titulo-modulo">
                Dúvidas Frequentes
              </h3>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card submodulo">
            <div className="card-body">
              <PerguntaResposta duvidas={props.duvidas} />
            </div>
          </div>
        </div>

      </div>
    </section>
        
    );
}