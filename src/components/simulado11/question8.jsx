import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
    { id: '1', question: 'Multa e remoção do veículo' },
    { id: '2', question: 'Multa.' },
    { id: '3', question: 'Advertência por escrito e recolhimento do documento de habilitação.' },
    { id: '4', question: 'Recolhimento do documento de habilitação.' }
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
