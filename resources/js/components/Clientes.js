import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Clientes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            clientes: []
        }
        this.deleteClick = this.deleteClick.bind(this);
        this.getData = this.getData.bind(this);
    }
    async getData(){
        await Axios.get('/api/clientes').then(Response => {
            this.setState({
                clientes: Response.data
            });
        })
    }
    componentDidMount() {
        this.getData();
        this.props.setForm(1);
    }

    onClickRow(event,id){
        // console.log(id);
        this.props.setData(id)
           
    }
    
    render() {
        return (
            <div className="container">
                <Paper className="root">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Nome</TableCell>
                                <TableCell align="center">Sobrenome</TableCell>
                                <TableCell align="center">CPF</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Data Nascimento</TableCell>
                                <TableCell align="center">Acao</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.clientes.map(row => (
                                <TableRow key={row.id} className={this.props.clickable ? "rowHover":""} onClick={event => this.onClickRow(event,row.id)}>
                                    <TableCell component="th" scope="row" align="center">
                                        {row.nome}
                                    </TableCell>
                                    <TableCell align="center">{row.sobrenome}</TableCell>
                                    <TableCell align="center">{row.cpf}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.data_nascimento}</TableCell>
                                    <TableCell align="center"> <IconButton aria-label="Delete" onClick={() => this.deleteClick(row.id)}>
                                        <DeleteIcon />
                                    </IconButton></TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                        {/* <TableFooter>
                        <TableRow>
                            <TablePagination
                                colSpan={3}
                                count={this.props.count}
                                rowsPerPage={rowsPerPage}
                                page={0}
                                // SelectProps={{
                                //     inputProps: { 'aria-label': 'Rows per page' },
                                //     native: true,
                                // }}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            // ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter> */}
                    </Table>
                </Paper>
                <br/>
            </div >
        );
    }

    async deleteClick(id) {
        await Axios.delete(`/api/clientes/${id}`).then(Response => {
            let filteredArray = this.state.clientes.filter(item => item.id !== id)
            this.setState({ clientes: filteredArray });
        });
    }
}

if (document.getElementById('clientes')) {
    ReactDOM.render(<Clientes />, document.getElementById('clientes'));
}
