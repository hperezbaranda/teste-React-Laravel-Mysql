import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import InputMask from 'react-input-mask'

import InputAdornment from '@material-ui/core/InputAdornment';
import Container from '@material-ui/core/Container';
import Axios from 'axios';

export default class ProductForm extends Component {

    constructor(props) {
        super(props);
        this.onChangeCost = this.onChangeCost.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.unitChange = this.unitChange.bind(this);
        this.state = {
            cost: '',
            unidade: ''
        }
    }

    onChangeCost(data) {
        const num = data.target.value; 
        console.log("valor real "+num);        
        const formatvalue = Number((num / 100).toFixed(2));
        console.log(formatvalue);
        
        this.setState({ cost: data.target.value, ot:formatvalue })
    }

    onSubmit(event) {

        event.preventDefault();
        const data = new FormData(event.target);
        Axios.post('/api/produtos', data)
            .then(Response => {
                this.myFormRef.reset();

                this.setState({
                    unidade: ''
                })

                this.props.history.push({
                    pathname: '/',
                    show: true
                });
            })
            console.log(this.stringifyFormData(data));
    }

    stringifyFormData(fd) {
        const data = {};
          for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, 2);
      }

    unitChange(data) {
        this.setState({
            unidade: data.target.value
        })
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={"paper"}>
                    <Typography className="title" component="h1" variant="h5">
                        Cadastrar Produtos
                    </Typography>
                    <form className={"form"} onSubmit={this.onSubmit} method="POST" ref={(form) => this.myFormRef = form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="fname"
                                    name="nome"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Name"
                                    label="Nome"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    width="60px"
                                    variant="outlined"
                                    fullWidth
                                    id="descricao"
                                    label="Descricao"
                                    name="descricao"
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="uniadade"
                                    label="Unidade"
                                    name="unidade"
                                    autoComplete="unidade"
                                    onChange={this.unitChange}
                                    value={this.state.unidade.toUpperCase()}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="quantidade"
                                    label="Quantidade"
                                    name="quantidade"
                                    autoComplete="quantidade"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">{this.state.unidade}</InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                        id=""
                                        label="Preço"
                                        name="preco"
                                        margin="normal"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                        // onChange={this.onChangeCost}
                                        // value={this.state.cost}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                                        }}                                  
                                />
                                
                            </Grid>
                        </Grid>
                        <br />
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={"submit"}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
            </Container>
        )
    }
}
