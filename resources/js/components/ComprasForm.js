import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClientForm from './ClientForm';
import ProductForm from './ProdutForm';
import Clientes from './Clientes';
import Produtos from './Produtos';
import Axios from 'axios';

export default class ComprasForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeStep: 0,
        }
        this.steps = ['Clientes', 'Produtos'];
        this.getStepContent = this.getStepContent.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }
    setForm(value) {
        this.form = value
        console.log("Value do Form " + value);
    }
    setData(tdata) {
        var produto_id = []
        // console.log("Formulario Compras "+tdata.type);
        if (tdata.type === "cliente") {
            this.setState({ activeStep: this.state.activeStep + 1, client_id: tdata.value });
        } else {
            this.setState({
                produto_id: tdata.value
            })

            // console.log(tdata.value);

        }
    }

    getStepContent(stp) {
        switch (stp) {
            case 0:
                return <Clientes setForm={this.setForm.bind(this)} clickable={true} setData={this.setData.bind(this)} />;
            case 1:
                return <Produtos setForm={this.setForm.bind(this)} buy={true} clickable={true} setData={this.setData.bind(this)} />;
            case 2:
                return 
            default:
                throw new Error('Unknown step');
        }
    }

    handleNext(event, actstep) {
        if (actstep === this.steps.length - 1) {
            var p = ""
            for (p of this.state.produto_id) {
                console.log(this.state.client_id);
                var data = { "cliente_id": this.state.client_id, "produto_id": p.pdt }
                console.log(data);

                Axios.post('/api/compras', data).then(Response => {
                    console.log(Response.data);
                    this.setState({ activeStep: this.state.activeStep + 1 });
                })
            }
        } else {
            this.setState({ activeStep: this.state.activeStep + 1 });
        }
    }

    handleBack() {
        this.setState({ activeStep: this.state.activeStep - 1 });
    }

    render() {
        return (
            <div>
                <Stepper activeStep={this.state.activeStep}>
                    {this.steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === this.steps.length ? (
                        <div>
                            <Typography >
                                A compra foi feita
                            </Typography>
                            <Button onClick={this.handleReset}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                            <div>
                                <Typography >{this.getStepContent(this.state.activeStep)}</Typography>
                                <div>
                                    <Button disabled={this.state.activeStep === 0} onClick={this.handleBack}>
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={(event) => this.handleNext(event, this.state.activeStep)}

                                    >
                                        {this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}
