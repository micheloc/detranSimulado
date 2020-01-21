import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
    { id: '1', question: 'Assegurar-se que poderá efetuar a manobra e adentrar a via rapidamente' },
    { id: '2', question: 'Manter-se sempre ao centro da via, para depois sinalizar.'},
    { id: '3', question: 'Assegurar-se que poderá efetuar a manobra sem perigo para os demais usuários e fazer o sinal indicativo de sua intenção.' },
    { id: '4', question: 'Desacelerar o veículo e colocar-se no centro da via.' }
];


const columns = [
    { dataField: 'id', text: 'Product ID', hidden: true },
    { dataField: 'question', text: 'Alternativas' },
];

export class question1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this._handleSelect = this._handleSelect.bind(this);
    }

    _handleSelect(row) {
        this.props.alternativa(row.id);
    }
    render() {
        const selectRow = {
            mode: 'radio',
            clickToSelect: true,
            onSelect: this._handleSelect
        };
        return (
            <div>
                <BootstrapTable keyField='id' data={question} columns={columns} selectRow={selectRow} />
            </div>
        );
    }
}

export default question1;
