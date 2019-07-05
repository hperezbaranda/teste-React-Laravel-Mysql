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
import Checkbox from '@material-ui/core/Checkbox';

export default class Produtos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            produtos: [],
            selected:[]
        }
        this.deleteClick = this.deleteClick.bind(this);
        this.getData = this.getData.bind(this);
    }

    async getData() {
        await Axios.get('/api/produtos/').then(Response => {
            this.setState({
                produtos: Response.data,
                select:false,
                selected:[]
            })
        })
    }

    componentDidMount() {
        this.getData();
        this.props.setForm(0);
    }

    onClickRow(event, id) {
        var newselect ={pdt:id}
        this.setState((prev,props)=>{
           return{ selected:[...this.state.selected,newselect]}
        })
        if(this.state.selected.length === 0){
            this.props.setData({type:"produto", value:[newselect]});
        }else{
            var send = this.state.selected
            send.push(newselect)
            this.props.setData({type:"produto", value:send});
        }
        // this.props.setData({type:"produto", value:this.state.selected});
        // console.log("name "+JSON.stringify(this.state.selected));
    }

    handleChange(event, name){
        console.log(name)
        // console.log("SELECTED "+this.state.selected);
    }
    
    render() {

        return (
            <div className="container">
                <Paper className="root">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Nome</TableCell>
                                <TableCell align="center">Descrisao</TableCell>
                                <TableCell align="center">Unidade</TableCell>
                                <TableCell align="center">Quantidade</TableCell>
                                <TableCell align="center">Preco</TableCell>
                                <TableCell align="center">Acao</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.produtos.map(row => (
                                <TableRow key={row.id} className={this.props.clickable ? "rowHover" : ""} onClick={(event)=>this.onClickRow(event,row.id)} >
                                    <TableCell component="th" scope="row" align="center">
                                    {this.props.buy &&
                                        <div style={{float:"left"}}>
                                        <Checkbox
                                            value={row.id}
                                            // checked={this.state.selected[row.id]}
                                            // onChange={(event)=>this.handleChange(event,row.id)}
                                        />
                                        </div>
                                    }
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
