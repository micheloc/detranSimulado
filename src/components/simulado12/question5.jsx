import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter,Button } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
    { id: '1', question: 'IBAMA.' },
    { id: '2', question: 'DETRAN.' },
    { id: '3', question: 'INMETRO.' },
    { id: '4', question: 'CONAMA.' }
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
