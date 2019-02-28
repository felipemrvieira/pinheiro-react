import React from 'react'
import './AtuacaoIntegrada.scss';
import axios from 'axios';

const URL = 'http://api.itec.al.gov.br/api/v1/plano'

export default props => {
    
    return (
        <section id="informacoes" className="container">
        <div className="row">
  
          <div id="cabecalho-modulo" className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3 className="titulo-modulo">
                  Atuação Integrada
                </h3>
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card submodulo">
              <div className="card-header">
                <h3 className="titulo-submodulo">
                  Prefeitura de Maceió
                </h3>
              </div>
              <div className="card-body">
  
                <div className="pergunta-resposta">
                  <a className="pergunta" data-toggle="collapse" href="#pergunta1" role="button" aria-expanded="false"
                    aria-controls="pergunta1">
                    Rachaduras e afundamentos
                  </a>
                  <div className="resposta collapse" id="pergunta1">
                    <p>
                      Ao perceber rachaduras e/ou afundamentos em casas, apartamentos e/ou ruas, o morador deve acionar a
                      Defesa Civil Municipal (0800 030 6205), que fará uma vistoria minuciosa. Também é importante ligar
                      sempre que tiver dúvida quanto à necessidade de sair da edificação.
  
                      Conforme orientação da Defesa Civil Municipal, as edificações (residenciais e comerciais)
                      localizadas nas áreas de risco muito alto (áreas vermelhas) precisam ser evacuadas.  
                    </p>
                  </div>
                  <hr />
                </div>
              
                <div className="pergunta-resposta">
                  <a className="pergunta" data-toggle="collapse" href="#pergunta2" role="button" aria-expanded="false"
                    aria-controls="pergunta2">
                    Cadastro e remoção de moradores
                  </a>
                  <div className="resposta collapse" id="pergunta2">
                    <p>
                      A Prefeitura de Maceió faz o levantamento e o cadastro das famílias que residem nos imóveis
                      atingidos.
                      A Defesa Civil Municipal está indo às áreas mapeadas pelo Serviço Geológico do Brasil (CPRM) e
                      atendendo
                      também chamados da população pelo telefone 0800 030 6205. A partir do recebimento das demandas, os
                      técnicos avaliam os imóveis e, caso seja constatado o risco decorrente das fissuras, é recomendada a
                      evacuação e é realizado o cadastro.
                      Os dados são encaminhados ao Governo Federal para a concessão do auxílio-moradia.
                    </p>
                  </div>
                  <hr />
                </div>
               
                <div className="pergunta-resposta">
                  <a className="pergunta" data-toggle="collapse" href="#pergunta3" role="button" aria-expanded="false"
                    aria-controls="pergunta3">
                    Aluguel Social
                  </a>
                  <div className="resposta collapse" id="pergunta3">
                    <p>
                      A Prefeitura de Maceió está fazendo, desde o começo de janeiro de 2019, o
                      cadastro de famílias que receberam recomendação da Defesa Civil Municipal
                      para deixar seus imóveis em decorrência do agravamento das fissuras identificadas
                      na região. Aquelas que não têm condições de buscar uma nova moradia sem auxílio financeiro
                      estão aptas a receber a ajuda humanitária do Governo Federal.
                    </p>
                    <p>
                      O Governo Federal já começou a repassar as verbas. O valor para cada proprietário
                      é de R$ 1 mil mensais por seis meses, totalizando R$ 480 mil em recursos. O benefício
                      pode ser renovado, segundo portaria do Ministério do Desenvolvimento Regional.
                    </p>
                  </div>
                  <hr />
                </div>

              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card submodulo">
              <div className="card-header">
                <h3 className="titulo-submodulo">
                  Governo de Alagoas
                </h3>
              </div>
              <div className="card-body">
  
                <div className="pergunta-resposta">
                  <a className="pergunta" data-toggle="collapse" href="#pergunta4" role="button" aria-expanded="false"
                    aria-controls="pergunta4">
                    Plano de Evacuação
                  </a>
                  <div className="resposta collapse" id="pergunta4">
                    <p>
                      O Plano de Contingência prevê rotas de fuga (vias às quais a população deve recorrer caso o Plano de
                      Contingência seja ativado) e pontos de encontro (locais para onde os moradores devem se dirigir para
                      receber atendimento caso o Plano seja ativado).
                    </p>
                    <p>
                      Em caso de desastres e outras situações de emergência, a Defesa Civil Estadual atuará na retirada
                      dos moradores do Pinheiro e no seu deslocamento até os pontos de apoio, utilizando os contingentes
                      do Corpo de Bombeiros, Polícia Militar, Exército Brasileiro, Força Aérea Brasileira, Grupamento
                      Aéreo da PM, Samu e Cruz Vermelha, além das próprias Defesas Civis Estadual e Municipal.
                    </p>
                    <p> <a href="plano-de-contingencia.html">Clique aqui</a> e veja o Mapa de Evacuação, com as rotas de
                      fuga e localização dos seguintes pontos de
                      encontro:
                    </p>
  
                    <ul>
                      <li>
                        Terminal de ônibus do bairro do Sanatório, na Rua Professor José da Silveira Camerino;
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
                        Sede do Instituto do Meio Ambiente de Alagoas (IMA), na Av. Major Cícero de Góes Monteiro, no
                        bairro do Mutange.
                      </li>
                    </ul>
  
                  </div>
                  <hr />
                </div>
              
                <div className="pergunta-resposta">
                  <a className="pergunta" data-toggle="collapse" href="#pergunta5" role="button" aria-expanded="false"
                    aria-controls="pergunta5">
                    Acidentes e Socorro
                  </a>
                  <div className="resposta collapse" id="pergunta5">
                    <p>
                      Em casos de ocorrências envolvendo vítimas, a Defesa Civil Estadual atua, por meio do
                      Corpo de
                      Bombeiros, no trabalho de busca e resgate de pessoas e animais, como após um eventual
                      desabamento de
                      residências ou outro tipo de acidente.
                    </p>
                    <p>
                      Você deve ligar 193 para ocorrências envolvendo desabamentos, quedas de árvores e postes,
                      inundação,
                      incêndio, choque elétrico e vazamento de produto perigoso.
                    </p>
                    <p>
                      A Defesa Civil Estadual também poderá ser acionada pela instância municipal para suporte
                      técnico e
                      de pessoal.
                    </p>
                  </div>
                  <hr />
                </div>
               
                <div className="pergunta-resposta">
                  <a className="pergunta" data-toggle="collapse" href="#pergunta6" role="button" aria-expanded="false"
                    aria-controls="pergunta6">
                    CASAL
                  </a>
                  <div className="resposta collapse" id="pergunta6">
                    <p>
                      Em casos de interrupção no abastecimento de água, vazamentos e rompimentos de canos e
                      tubulações em casas, apartamentos e/ou ruas, é necessário entrar em contato com a
                      Casal – Companhia de Abastecimento de Alagoas pelo número 0800 082 0195. Você também
                      pode acessar <a href="https://www.casal.al.gov.br/" target="_blank"
                        rel="noopener noreferrer">www.casal.al.gov.br</a> para mais informações.
                    </p>
                  </div>
                  <hr />
                </div>
            
  
  
              </div>
            </div>
          </div>
  
          <div className="col-md-4">
            <div className="card submodulo">
              <div className="card-header">
                <h3 className="titulo-submodulo">
                  Governo Federal
                </h3>
              </div>
              <div className="card-body">
  
            
                <div className="pergunta-resposta">
                  <a className="pergunta" data-toggle="collapse" href="#pergunta7" role="button" aria-expanded="false"
                    aria-controls="pergunta7">
                    Causas Possíveis
                  </a>
                  <div className="resposta collapse" id="pergunta7">
                    <p>
                      O Serviço Geológico do Brasil (CPRM) trabalha com as seguintes hipóteses:
                    </p>
                    <ul>
                      <li>
                        Características geotécnicas dos solos da região e forma de ocupação do bairro;
                      </li>
                      <li>
                        Presença de vazios (cavidades, cavernas) no solo e subsolo da região, decorrente de causas
                        naturais ou de ações antrópicas;
                      </li>
                      <li>
                        Estruturas/feições tectônicas ativas na região (falhas e descontinuidades, por exemplo);
                      </li>
                      <li>
                        Extração de água subterrânea
                      </li>
                    </ul>
  
                  </div>
                  <hr />
                </div>
               
                <div className="pergunta-resposta">
                  <a className="pergunta" data-toggle="collapse" href="#pergunta8" role="button" aria-expanded="false"
                    aria-controls="pergunta8">
                    Relatórios e Estudos
                  </a>
                  <div className="resposta collapse" id="pergunta8">
                    <ul>
                      <li>
                        <a
                          href="http://rigeo.cprm.gov.br/jspui/bitstream/doc/20610/8/cronograma_bpinheiro_atualizado.pdf">
                          Cronograma de Estudos do Serviço Geológico do Brasil - CPRM no Bairro Pinheiro
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://rigeo.cprm.gov.br/jspui/bitstream/doc/20626/1/rel_acompanhamento_bairropinheiro.pdf">
                          Relatório de Acompanhamento n.º 01 (01/2019)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <hr />
                </div>
              
                <div className="pergunta-resposta">
                  <a className="pergunta" data-toggle="collapse" href="#pergunta9" role="button" aria-expanded="false"
                    aria-controls="pergunta9">
                    Força-Tarefa
                  </a>
                  <div className="resposta collapse" id="pergunta9">
                    <p>
                      Três órgãos do Governo Federal atuam em Maceió:
                    </p>
                    <ul>
                      <li>
                        A Defesa Civil Nacional dá suporte técnico e de pessoal especializado para adoção de medidas
                        apoiadas pelo Governo Federal;
  
                      </li>
                      <li>
                        O Serviço Geológico do Brasil (CPRM) está realizando uma série de estudos para identificar as
                        causas do fenômeno de instabilidade do terreno;
                      </li>
                      <li>
                        A Agência Nacional de Mineração realiza estudos e levantamento de dados sobre a exploração mineral
                        em Alagoas.
                      </li>
                    </ul>
  
                    <p>
                      O Governo Federal, por meio do Ministério do Desenvolvimento Regional, também atua na liberação de
                      recursos para suporte às vítimas, como o pagamento de aluguel social para as famílias que não têm
                      condições de buscar uma nova moradia sem auxílio financeiro.
                    </p>
                  </div>
                  <hr />
                </div>
  
  
              </div>
            </div>
          </div>
  
  
        </div>
      </section>
        
    );
}