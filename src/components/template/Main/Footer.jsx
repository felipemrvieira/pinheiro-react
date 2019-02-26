import './Footer.scss'
import React from 'react'

export default props => (
    <footer>
        <div className="container">
            <div className="row">

                <div className="col-lg-12">
                    <div className="orgao">
                    <div className="orgao-logo"></div>
                    <div className="orgao-info">
                        <h5 className="orgao-sigla">Agência Alagoas</h5>
                        <p className="orgao-nome">Governo do Estado de Alagoas</p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <h5 className="phone">(82) 3315-3608</h5>
                    <address>
                        <p>Rua Cincinato Pinto, s/n
                        Centro - CEP 57020-050.
                        Maceió - Alagoas</p>
                    </address>
                </div>

                <div className="col-lg-12">
                    <div className="copyright">
                        <div className="itec-logo"></div>
                        <p>Governo do Estado de Alagoas © 2019</p>
                    </div>
                </div>

            </div>
        </div>
    </footer>
)