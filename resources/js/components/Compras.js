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

export default class Compras extends Component {

    constructor(props) {
        super(props)

        this.state = {
            compras: []
        }
        this.deleteClick = this.deleteClick.bind(this);
        this.getData = this.getData.bind(this);
    }
    async getData(){
        await Axios.get('/api/compras').then(Response => {          
            this.setState({
                compras: Response.data
            });
        })
        // console.log(this.tmpcompras);
        
        // this.setState({
        //     compras: Response.data
        // });
    }
    componentDidMount() {
        this.getData();
        this.props.setForm(2);
    }

    onClickRow(event,id){
        // Criar a edição
    }
    
    render() {
        return (
            <div className="container">
                <Paper className="root">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Cliente</TableCell>
                                <TableCell align="center">Produto</TableCell>
                                <TableCell align="center">Valor Total</TableCell>
                                <TableCell align="center">Data da Compra</TableCell>
                                <TableCell align="center">Acao</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.compras.map(row => (
                                <TableRow key={row.id} className="rowClient" onClick={event => this.onClickRow(event,row.id)}>
                                    <TableCell component="th" scope="row" align="center">
                                        {row.cliente_id}
                                    </TableCell>
                                    <TableCell align="center">{row.produto_id}</TableCell>
                                    <TableCell align="center">0</TableCell>
                                    <TableCell align="center">{row.created_at}</TableCell>
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
        await Axios.delete(`/api/compras/${id}`).then(Response => {
            let filteredArray = this.state.compras.filter(item => item.id !== id)
            this.setState({ compras: filteredArray });
        });
    }
}

if (document.getElementById('compras')) {
    ReactDOM.render(<compras />, document.getElementById('compras'));
}
