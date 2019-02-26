import React from 'react'
import './AreasAtingidas.scss';

export default props => {
    
    return (
        <section id="areas-afetadas" className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <a className="card-header" 
                        data-toggle="collapse" 
                        href="#collapseArea" 
                        role="button" 
                        aria-expanded="false"
                        aria-controls="collapseArea">
                        <h3 className="titulo-modulo">
                            Está em uma das áreas atingidas?
                        </h3>
                        </a>
                        <div className="card-body collapse" id="collapseArea">
                            <div className="">
                                <div className="">
                                    <p>
                                        A área vermelha corresponde aos locais com maior intensidade de deformação.
                                        Ou seja, com maior concentração de trincas/rachaduras em imóveis ou vias
                                        públicas ou onde ocorrem trincas/rachaduras com maiores aberturas, indicando
                                        que o processo de deformação do solo é mais intenso nesta área.
                                    </p>
                                    <p>
                                        As áreas laranja e amarela correspondem aos locais onde esse processo foi
                                        identificado como de intensidade alta e média.
                                    </p>
                                    <p>
                                        A orientação é que, diante do surgimento de novas fissuras ou agravamento das
                                        existentes, o cidadão deve acionar a Defesa Civil Municipal (0800 030 6205) para avaliação do
                                        imóvel. Você também deve ligar sempre que tiver dúvida quanto à necessidade de
                                        sair da edificação.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}