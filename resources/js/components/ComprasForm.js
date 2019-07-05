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

export default class ComprasForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeStep: 0,
        }
        this.steps = ['Clientes', 'Produtos', 'Confirmar compra'];
        this.getStepContent =this.getStepContent.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }
    setForm(value){
        this.form = value
        console.log("Value do Form "+value);       
    }
    setData(tdata){
        console.log("Formulario Compras "+tdata);
        
        // this.setState({
        //     data:tdata
        // })
    }
    
    getStepContent(stp) {
        switch (stp) {
            case 0:
                return <Clientes setForm = {this.setForm.bind(this)} clickable={true}setData = {this.setData.bind(this)}/>;
            case 1:
                return <Produtos setForm = {this.setForm.bind(this)} clickable={true} setData = {this.setData.bind(this)}/>;
            case 2:
                return <Clientes setForm = {this.setForm.bind(this)} setData = {this.setData.bind(this)}/>;
            default:
                throw new Error('Unknown step');
        }
    }

    handleNext() {
        this.setState({activeStep: this.state.activeStep + 1});
        console.log(this.state.activeStep);
    }
    
    handleBack() {
        this.setState({activeStep:this.state.activeStep - 1});
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
                                All steps completed - you&apos;re finished
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
                                        onClick={this.handleNext}
                                    
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
