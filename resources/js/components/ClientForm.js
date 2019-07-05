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

export default class ClientForm extends Component {

    constructor(props) {
        super(props);
        this.onChangeData = this.onChangeData.bind(this);
        this.onChangeCPF = this.onChangeCPF.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            nascimento: '',
            cpf:'',
            daterror:false
        }
    }

    onChangeData(data) {
        var date = new Date(data.target.value)
        var today = new Date()
        console.log(today.getFullYear()-date.getFullYear());
        
        console.log(date)
        this.setState({ nascimento: data.target.value })
    }

    onChangeCPF(data) {
        this.setState({ cpf: data.target.value })
    }

    onSubmit(event){
        
        event.preventDefault();
        const data = new FormData(event.target);
        
        Axios.post('/api/clientes',data)
        .then(Response => {
            this.myFormRef.reset();

            this.setState({
                nascimento:'',
                cpf:''
            })

            this.props.history.push({
                pathname:'/',
                show:true
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

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={"paper"}>
                    {/* <Avatar className={"Avatar"}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography className="title" component="h1" variant="h5">
                        Cadastrar Cliente
                    </Typography>
                    <form className={"form"} onSubmit={this.onSubmit} method="POST" ref={(form) => this.myFormRef = form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    autoComplete="fname"
                                    name="nome"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nome"
                                    ref={(n) => this.name = n}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Sobrenome"
                                    name="sobrenome"
                                    autoComplete="lname"
                                    ref={(ln) => this.lastname = ln}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    ref={(em) => this.email = em}
                                />
                            </Grid>
                            <Grid item xs={12}>

                                <InputMask
                                    mask="999.999.999-99"
                                    onChange={this.onChangeCPF}
                                    value={this.state.cpf}
                                >
                                    {() => <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="cpf"
                                        label="CPF"
                                        id="cpf"
                                        autoComplete="cpf"
                                        ref={(c) => this.cpf = c}
                                    />}
                                </InputMask>
                            </Grid>
                            <Grid item xs={12}>
                                <InputMask
                                    mask="9999-99-99"
                                    onChange={this.onChangeData}
                                    value={this.state.nascimento}
                                >
                                    {() => <TextField
                                        error={this.state.daterror}
                                        id="data_nascimento"
                                        label="Data de Nascimento"
                                        name="data_nascimento"
                                        margin="normal"
                                        type="text"
                                        variant="outlined"
                                        fullWidth
                                    />}
                                </InputMask>
                            </Grid>

                        </Grid>
                        <br />
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={"submit"}
                            //onClick={this.Submit}
                        >
                            Sign Up
                        </Button>
                        {/* <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid> */}
                    </form>
                </div>
                {/* <Box mt={5}>
                    
                </Box> */}
            </Container>
        )
    }
}
