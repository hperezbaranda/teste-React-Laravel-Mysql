import React, { Component } from 'react'
import ClientForm from './ClientForm';
import ComprasForm from './ComprasForm';
import ProdutForm from './ProdutForm';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state={
            form: this.props.wishform
        }
    }
    render() {
        const clientform = this.props.wishform;
        let saida
        if(clientform === 1){
            saida = <ClientForm history={this.props.history}/>
        }else if(clientform === 0){
            saida = <ProdutForm history={this.props.history}/>
        }
        else{
            saida = <ComprasForm history={this.props.history}/>
        }
       
        return (
            <div className="container">
                {saida}             
            </div>
        )
    }
}
