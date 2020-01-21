import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
    { id: '1', question: 'O máximo possivel do eixo da via, caso se trate de uma via arterial de circulação nos dois sentidos, para realizar uma conversão à direita.' },
    { id: '2', question: 'Do bordo direito, tratando-se de uma via coletora de dois sentidos, para realizar uma conversão à esquerda.' },
    { id: '3', question: 'O máximo possivel do bordo direito da pista para realizar uma conversão à direita em uma via coletora.' },
    { id: '4', question: 'Do bordo esquerdo, tratando-se de uma via coletora de dois sentidos, para realizar uma conversão à esquerda.' }
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
