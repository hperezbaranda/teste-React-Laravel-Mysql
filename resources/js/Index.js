import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clientes from './components/Clientes'
import Produtos from './components/Produtos'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

export default class Index extends Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="row center">
                        <div className="card mx-auto Cliente-Card">
                            <Link to="/clientes" className="link">
                                <div className="card-body">
                                    <div className="row center">
                                        <div className="col-md-6" >
                                            <img src="images/clientes.png" alt="" width="80px" />
                                        </div>
                                        <div className="col-md-6 Cliente-Card-Info" >
                                            <h1>Cliente</h1>
                                            <p>
                                                Tudo a ver com Clientes
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row center">
                        <div className="card mx-auto Cliente-Card">
                            <Link to="/produtos" className="link">
                                <div className="card-body">
                                    <div className="row center">
                                        <div className="col-md-6" >
                                            <img src="images/clientes.png" alt="" width="80px" />
                                        </div>
                                        <div className="col-md-6 Cliente-Card-Info" >
                                            <h1>Produtos</h1>
                                            <p>
                                                Tudo a ver com Produtos
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row center">
                        <Route path="/clientes" exact component={Clientes} />
                        <Route path="/produtos" component={Produtos} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

if (document.getElementById('container')) {
    ReactDOM.render(<Index />, document.getElementById('container'));
}
