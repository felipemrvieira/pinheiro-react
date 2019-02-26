import React, { Component } from 'react';
import './OrgaosDefesa.scss';
import $ from 'jquery';


class OrgaosDefesa extends Component {
  render() {
    return (
        <section id="orgaos-defesa" className="container">
            <div className="row ">
                <div className="col-lg-12">
                <div id="telefones">
                    <span>Telefones Úteis</span>
                </div>
                <div className="discar">
                    Toque para discar!
                </div>
                <div id="orgaos-container">

                    <div className="orgao-defesa">
                    <a href="tel:193">
                        <div className="orgao-info">
                        <div className="orgao-telefone">193</div>
                        <div className="orgao-titulo">Corpo de Bombeiros</div>
                        </div>
                    </a>
                    <div className="orgao-competencias">
                        <div className="competencia-previa" data-toggle="collapse" href="#collapseExample1" role="button"
                        aria-expanded="false" aria-controls="collapseExample1">Desabamento, queda de árvore, feridos...</div>
                    
                        <div className="collapse" id="collapseExample1">
                        <b>Disque 193</b> para ocorrências envolvendo desabamentos, quedas de árvores e
                        postes, inundação, incêndio, choque elétrico e vazamento de produto perigoso.

                        Os bombeiros fazem o resgate de pessoas ou animais em situação de risco. Eles
                        também devem ser acionados em casos de acidentes com vítima.
                        </div>
                    </div>
                    </div>
                    <div className="orgao-defesa">
                    <a href="tel:08000306205">
                        <div className="orgao-info">
                        <div className="orgao-telefone">0800 030 6205</div>
                        <div className="orgao-titulo">Defesa Civil Municipal</div>
                        </div>
                    </a>
                    <div className="orgao-competencias">
                        <div className="competencia-previa" data-toggle="collapse" href="#collapseExample2" role="button"
                        aria-expanded="false" aria-controls="collapseExample2">Rachadura, afundamento, dúvida sobre os
                        riscos...</div>
                        <div className="collapse" id="collapseExample2">
                        Ligue para a Defesa Civil Municipal quando perceber o agravamento dos
                        fenômenos - rachaduras e/ou afundamentos - nas casas, apartamentos e/ou
                        ruas. Você também deve ligar sempre que tiver dúvida quanto à necessidade de
                        sair da edificação.
                        </div>
                    </div>
                    </div>
                    <div className="orgao-defesa">
                    <a href="tel:08000820195">
                        <div className="orgao-info">
                        <div className="orgao-telefone">0800 082 0195</div>
                        <div className="orgao-titulo">CASAL</div>
                        </div>
                    </a>
                    <div className="orgao-competencias">
                        <div className="competencia-previa" data-toggle="collapse" href="#collapseExample3" role="button"
                        aria-expanded="false" aria-controls="collapseExample3">Falta de água, vazamento, rompimento...</div>
                        
                        <div className="collapse" id="collapseExample3">
                        Entre em contato com a Casal em casos de interrupção no abastecimento de
                        água, vazamentos e rompimentos de canos e tubulações em casas,
                        apartamentos e/ou ruas.
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

    );
  }
}

export default OrgaosDefesa;


