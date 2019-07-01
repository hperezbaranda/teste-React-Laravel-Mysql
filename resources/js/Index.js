import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clientes from './components/Clientes'
import Produtos from './components/Produtos'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ClientForm from './components/ClientForm';
import { log } from 'util';

export default class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false
        }
        this.listElemet = this.listElemet.bind(this)
    }

    listElemet() {
        
        this.setState({
            show: true
        })
        
    }

    noListElement() {
        
        this.setState({
            show: false
        })
        
    }
 
        
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="row center">
                        <div className="card mx-auto Cliente-Card">
                            <Link to="/clientes" className="link" onClick={() => this.listElemet()}>
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
                            <Link to="/produtos" className="link" onClick={() => this.listElemet()}>
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
                        <Route path="/add" component={ClientForm}/>
                            
                    </div>
                    <div className="row center">
                        {this.state.show && (
                        <Link to="/add" className="addLink" onClick={() => this.noListElement()}>
                            <Fab color="primary" aria-label="Add">
                                <AddIcon />
                            </Fab>
                        </Link>)}

                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

if (document.getElementById('container')) {
    ReactDOM.render(<Index />, document.getElementById('container'));
}
