import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clientes from './components/Clientes'
import Compras from './components/Compras'
import Produtos from './components/Produtos'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Form from './components/Form';

export default class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: false,
            form:""
        }
        this.listElemet = this.listElemet.bind(this)
        // this.setForm = this.setForm.bind(this)
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
    setForm(value){
        this.form = value
        console.log("Value do Form "+value);
    }
         
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="row center">
                        <div className="card mx-auto Cliente-Card">
                            <Link to="/clientes" className="link" onClick={this.listElemet}>
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
                        <div className="card mx-auto Cliente-Card">
                            <Link to="/compras" className="link" onClick={this.listElemet}>
                                <div className="card-body">
                                    <div className="row center">
                                        <div className="col-md-6" >
                                            <img src="images/clientes.png" alt="" width="80px" />
                                        </div>
                                        <div className="col-md-6 Cliente-Card-Info" >
                                            <h1>Compras</h1>
                                            <p>
                                                Tudo a ver com Compras
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="row center">
                        <Route path="/clientes" exact component={(props) => <Clientes {...props} clickable={false} setData = {()=>{}} setForm = {this.setForm.bind(this)}/>} />
                        <Route path="/produtos" component={(props) => <Produtos {...props} clickable={false} setData = {()=>{}} setForm = {this.setForm.bind(this)}/>} />
                        <Route path="/compras" component={(props) => <Compras {...props} setForm = {this.setForm.bind(this)}/>} />
                        <Route path="/add" component={(props) => <Form {...props} wishform = {this.form}/>}/>
                            
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
