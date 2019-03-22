import React, { Component } from 'react';
import './TelefonesUteis.scss';

class TelefonesUteis extends Component {
  render() {
    return (
        <section id="telefones-uteis" className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card" id="" >
                    <a href="" data-toggle="collapse" href="#corpo-card-telefones" role="button"
                        aria-expanded="false" aria-controls="corpo-card-telefones">
                        <div className="card-header">
                            <p className="titulo-componente">+ Telefones Úteis</p>
                        </div>
                    </a>
                        <div id="corpo-card-telefones" className="collapse card-body">
                            <div id="">
                                <ul>
                                    <li>ELETROBRÁS (0800 082 0196) - Ocorrências na rede elétrica.</li>
                                    <li>ALGÁS (117) - Casos de vazamento nas tubulações de gás.</li>
                                    <li>ANATEL (1331) - Para registrar reclamações contra prestadoras e pedidos de informação à Agência.
                                    </li>
                                    <li>DEFESA CIVIL ESTADUAL (3315-2843) - Atua em situações de emergência, após ser acionada pelo
                                    município.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
  }
}

export default TelefonesUteis;


