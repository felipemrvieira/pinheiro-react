import React from 'react'
import './PlanoContingencia.scss';
import evacuacao from '../images/mapa-evacuacao.jpg';

export default props => {
   
    return (
        <section id="plano-contingencia" class="container">
        <div class="row">
  
          <div id="cabecalho-modulo" class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h3 class="titulo-modulo">
                  Plano de Contingência de Proteção e de Defesa Civil do Pinheiro
                </h3>
              </div>
            </div>
          </div>
  
          <div class="col-md-12">
            <div class="card submodulo">
  
              <div class="card-body">
                <div class="descricao-plano">
                  <div class="resposta">
                    <p>
                      O <b>Plano de Contingência</b> <a
                        href="http://www.maceio.al.gov.br/wp-content/uploads/2019/01/pdf/2019/01/PLANO-DE-CONTING%C3%8ANCIA-1.pdf"
                        target="_blank" rel="noopener">(clique aqui para abrir o documento)</a> determina
                      as medidas emergenciais - como a evacuação do bairro - em caso de
                      desastres e outras situações de emergência.
                    </p>
                    <b>Quando o Plano de Contingência pode ser ativado?</b>
                    <ol>
                      <li>
                        Quando a Defesa Civil Municipal constatar <b>riscos nas fissuras</b> que
                        evidenciem necessidade de evacuação do bairro;
                      </li>
                      <li>
                        Quando houver <b>previsão meteorológica</b> que apresente a possibilidade
                        real de ocorrer de eventos que possam causar danos à população;
                      </li>
                      <li>
                        Quando forem constatados, pelas Defesas Civis Municipal e/ou Estadual,
                        <b>danos humanos</b>.
                      </li>
                    </ol>
                    <b>Quem pode ativar o Plano de Contingência?</b>
                    <p>
                      O Plano de Contingência poderá ser ativado pelo secretário de Defesa Civil
                      Municipal
                      e/ou pelo coordenador da Defesa Civil Estadual.
                    </p>
  
                    <b>
                      Como acontecerá a evacuação do Pinheiro se o Plano de Contingência for
                      ativado?
                    </b>
                    <p>
  
                      A Defesa Civil Estadual elaborou a estratégia para a retirada dos moradores do
                      bairro do Pinheiro e seu deslocamento aos pontos de apoio, utilizando os
                      contingentes:
                    </p>
  
                    <ul>
                      <li>Corpo de Bombeiros</li>
                      <li>Polícia Militar</li>
                      <li>Exército Brasileiro</li>
                      <li>Força Aérea Brasileira</li>
                      <li>Grupamento Aéreo da PM</li>
                      <li>Samu</li>
                      <li>Cruz Vermelha</li>
                      <li>Defesas Civis Estadual e Municipal</li>
                    </ul>
  
                    <b>O que devo fazer se o Plano de Contingência for ativado?</b>
                    <p>
  
                      Dirija-se ao ponto de encontro previsto de mais fácil acesso e mais próximo de
                      sua
                      casa ou do local onde você esteja:
                    </p>
  
                    <ul>
                      <li>Terminal de ônibus do bairro do Sanatório, na Rua Professor José da Silveira
                        Camerino;
                      </li>
                      <li>
                        Estacionamento da Casa Vieira, na Rua Tereza de Azevedo;
                      </li>
                      <li>
                        Concessionárias Hyundai e Volkswagen, na Av. Fernandes Lima;
                      </li>
                      <li>
                        Cepa – Centro de Estudos e Pesquisas Aplicadas, na Av. Fernandes Lima;
                      </li>
                      <li>
                        Praça Lucena Maranhão, na Av. Major Cícero de Góes Monteiro, no Bebedouro;
                      </li>
                      <li>
                        Sede do Instituto do Meio Ambiente de Alagoas (IMA), na Av. Major Cícero de
                        Góes Monteiro, no bairro do Mutange.
                      </li>
                    </ul>
  
  
                  </div>
                </div>
                <div id="mapa-container">
                  <img src={evacuacao} alt="Mapa de evacuação" />
                </div>
  
              </div>
            </div>
          </div>
  
        </div>
      </section>
        
    );
}