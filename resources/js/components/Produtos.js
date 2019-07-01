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

export default class Produtos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            produtos: []
        }
        this.deleteClick = this.deleteClick.bind(this);
        this.getData = this.getData.bind(this);
    }

    async getData(){
        await Axios.get('/api/produtos').then(Response => {
            this.setState({
                produtos: Response.data
            })
        })
    }
 
    componentDidMount() {
        this.getData();
        this.props.setForm(2);
    }

    render() {
        return (
            <div className="container">
                <Paper className="root">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell align="center">Descrisao</TableCell>
                                <TableCell align="center">Unidade</TableCell>
                                <TableCell align="center">Quantidade</TableCell>
                                <TableCell align="center">Preco</TableCell>
                                <TableCell align="center">Acao</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.produtos.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.nome}
                                    </TableCell>
                                    <TableCell align="center">{row.descricao}</TableCell>
                                    <TableCell align="center">{row.unidade}</TableCell>
                                    <TableCell align="center">{row.quantidade}</TableCell>
                                    <TableCell align="center">R$ {row.preco}</TableCell>
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
                <br />
            </div >
        );
    }

    async deleteClick(id) {
      await Axios.delete(`/api/produtos/${id}`).then(Response => {
            let filteredArray = this.state.produtos.filter(item => item.id !== id)
            this.setState({ produtos: filteredArray });
        });
    }
}

if (document.getElementById('produtos')) {
    ReactDOM.render(<Produtos />, document.getElementById('produtos'));
}
