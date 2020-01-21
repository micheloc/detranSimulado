import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
    { id: '1', question: 'A Álcool.' },
    { id: '2', question: 'A Diesel.' },
    { id: '3', question: 'A Querosene.' },
    { id: '4', question: 'A Gasolina.' }
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
