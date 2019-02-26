import React from 'react'
import './DuvidasFrequentes.scss';
import evacuacao from '../images/mapa-evacuacao.jpg';

export default props => {
   
    return (
      <section id="perguntas-e-respostas" className="container">
      <div className="row">

        <div id="cabecalho-modulo" className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="titulo-modulo">
                Perguntas e Respostas
              </h3>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card submodulo">

            <div className="card-body">

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta1" role="button" aria-expanded="false"
                  aria-controls="pergunta1">
                  Quando discar 193 - Corpo de Bombeiros?
                </a>
                <div className="resposta collapse" id="pergunta1">
                  <p>
                    Disque 193 para ocorrências envolvendo desabamentos, quedas de árvores e postes,
                    inundação, incêndio, choque elétrico e vazamento de produto perigoso.

                    Os bombeiros fazem o resgate de pessoas ou animais em situação de risco. Eles
                    também devem ser acionados em casos de acidentes com vítima.

                  </p>
                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta2" role="button" aria-expanded="false"
                  aria-controls="pergunta2">
                  Quando chamar a Defesa Civil Municipal (0800 030 6205)?

                </a>
                <div className="resposta collapse" id="pergunta2">
                  <p>
                    Quando perceber o agravamento dos fenômenos - rachaduras e/ou afundamentos - nas
                    casas, apartamentos e/ou ruas.
                    Você também deve ligar sempre que tiver dúvida quanto à necessidade de sair da
                    edificação.
                  </p>
                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta3" role="button" aria-expanded="false"
                  aria-controls="pergunta3">
                  Que cuidados devo tomar em caso de queda de árvores?

                </a>
                <div className="resposta collapse" id="pergunta3">
                  <p>
                    Disque 193 - Corpo de Bombeiros e repasse os detalhes de localização e de
                    existência (ou não) de pessoas atingidas.

                    Além disso, é preciso tomar alguns cuidados:
                  </p>

                  <ul>
                    <li>
                      Não se aproxime, principalmente se a árvore tiver contato com fiação elétrica,
                      pois existe o risco de choque elétrico.
                    </li>
                    <li>
                      Se possível, isole a área. Evite que outras pessoas se aproximem do local,
                      principalmente as crianças.
                    </li>
                    <li>
                      Evite a área caso a árvore tenha caído sobre muros, paredes, abrigos de
                      ônibus, etc. A estrutura pode ceder devido ao peso da árvore.
                    </li>
                  </ul>

                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta4" role="button" aria-expanded="false"
                  aria-controls="pergunta4">
                  Que cuidados devo tomar em caso de queda de postes?

                </a>
                <div className="resposta collapse" id="pergunta4">
                  <p>
                    Disque 193 - Corpo de Bombeiros e ligue 0800 082 0196 - Eletrobrás.

                    Além disso, é preciso tomar alguns cuidados:
                  </p>
                  <ul>
                    <li>
                      Não se aproxime, pois é grande o risco de choques elétricos. Se possível,
                      isole a área. Evite que outras pessoas se aproximem do local, principalmente as
                      crianças.
                    </li>
                    <li>
                      Evite contato com qualquer material metálico ou outros que possam conduzir
                      energia (inclusive “madeira verde”).
                    </li>
                    <li>
                      Não passe próximo dos fios caídos. Existe a possibilidade de choque mesmo sem
                      ter contato com fios e materiais energizados, devido à diferença de potencial
                      criada na área afetada.
                    </li>
                    <li>
                      Se estiver no interior de um carro e a fiação do poste cair sobre o mesmo, não
                      saia do veículo, a não ser que existam outros riscos mais graves (incêndio,
                      queda em barreira...), pois ao sair do carro o condutor pode ser eletrocutado.
                    </li>
                  </ul>


                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta5" role="button" aria-expanded="false"
                  aria-controls="pergunta5">
                  O que fazer nos casos afundamento de rua, quintal ou residência?

                </a>
                <div className="resposta collapse" id="pergunta5">
                  <p>
                    Afaste-se do local de risco imediatamente e procure um lugar seguro, fora das
                    áreas de risco já divulgadas pela Defesa Civil. Ligue para a Defesa Civil
                    Municipal (0800 030 6205) e informe a localização da ocorrência. Se possível,
                    isole a área e evite que outras pessoas se aproximem do local.

                  </p>
                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta6" role="button" aria-expanded="false"
                  aria-controls="pergunta6">
                  Quando devo deixar minha casa?

                </a>
                <div className="resposta collapse" id="pergunta6">
                  <p>
                    Conforme orientação da Defesa Civil Municipal, as edificações
                    (residenciais e comerciais) localizadas nas áreas de risco muito alto (áreas
                    vermelhas) precisam ser evacuadas.
                  </p>
                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta7" role="button" aria-expanded="false"
                  aria-controls="pergunta7">
                  Está em dúvida quanto aos riscos de seu imóvel?

                </a>
                <div className="resposta collapse" id="pergunta7">
                  <p>
                    A qualquer sinal de anormalidade, rachaduras ou afundamento de alguma área do
                    imóvel, entre em contato com a Defesa Civil Municipal (0800 030 6205).

                  </p>
                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta8" role="button" aria-expanded="false"
                  aria-controls="pergunta8">
                  Em caso de risco, é melhor permanecer em casa ou me dirigir a outro local?
                </a>
                <div className="resposta collapse" id="pergunta8">
                  <p>
                    Ao perceber o aumento de rachaduras e/ou afundamentos, saia do imóvel e busque
                    um local seguro, fora da edificação. Avise a Defesa Civil Municipal (0800 030
                    6205).

                  </p>
                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta9" role="button" aria-expanded="false"
                  aria-controls="pergunta9">
                  Em caso de acionamento do Plano de Evacuação do bairro, o que devo fazer?
                </a>
                <div className="resposta collapse" id="pergunta9">
                  <p>
                    Dirija-se ao ponto de encontro previsto pela Defesa Civil Municipal. Escolha a
                    opção de mais fácil acesso e mais próxima de sua casa ou do local onde você
                    esteja.
                  </p>
                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta10" role="button" aria-expanded="false"
                  aria-controls="pergunta10">
                  Moro em prédio: em caso de algum tremor, devo descer de escada ou elevador?

                </a>
                <div className="resposta collapse" id="pergunta10">
                  <p>
                    Em caso de risco, utilize as escadas de emergência das edificações. Elevadores
                    não devem ser utilizados.

                  </p>
                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta11" role="button" aria-expanded="false"
                  aria-controls="pergunta11">
                  Onde posso buscar informações atualizadas sobre a situação do Pinheiro?
                </a>
                <div className="resposta collapse" id="pergunta11">
                  <p>
                    Acompanhe este site, o portal da Prefeitura de Maceió e siga redes sociais
                    oficiais de órgãos estaduais e municipais, como o Corpo de Bombeiros Militar de
                    Alagoas (@cbmalagoas) e o Governo de Alagoas (@governodealagoas).

                    IMPORTANTE: Só compartilhe informações obtidas por meio da imprensa e/ou de
                    órgãos públicos.

                  </p>
                </div>
                <hr />
              </div>

              <div className="pergunta-resposta">
                <a className="pergunta" data-toggle="collapse" href="#pergunta12" role="button" aria-expanded="false"
                  aria-controls="pergunta12">
                  Para quem ligar?

                </a>
                <div className="resposta collapse" id="pergunta12">
                  <p>
                    ELETROBRÁS (0800 082 0196) - Ocorrências na rede elétrica.
                  </p>
                  <p>
                    ALGÁS (117) - Casos de vazamento nas tubulações de gás.
                  </p>
                  <p>
                    CASAL (0800 082 0195) - Interrupção no abastecimento de água, vazamentos e
                    rompimentos de canos e tubulações.
                  </p>
                  <p>
                    CORPO DE BOMBEIROS MILITAR (193)
                  </p>
                  <p>
                    DEFESA CIVIL MUNICIPAL (0800 030 6205)
                  </p>
                  <p>
                    DEFESA CIVIL ESTADUAL (3315-2843)
                  </p>

                </div>
                <hr/>
              </div>


            </div>
          </div>
        </div>



      </div>
    </section>
        
    );
}