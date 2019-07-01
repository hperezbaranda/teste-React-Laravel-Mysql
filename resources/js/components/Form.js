import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputMask from 'react-input-mask'

import Container from '@material-ui/core/Container';
import Axios from 'axios';
import ClientForm from './ClientForm';
import ProductForm from './ProdutForm';

export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state={
            form: this.props.wishform
        }
    }
    render() {
        const clientform = this.props.wishform;
        console.log(this.props.wishform);
        
        return (
            <div className="container">
            {clientform
                ? <ClientForm/>
                : <ProductForm/>}  
            </div>
        )
    }
}
