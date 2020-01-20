import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap'; 
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
    {id: '1', question:'Quebrar o lacre e acionar o gatilho.' },
    {id: '2', question:'Manter o extintor em pé, na posição vertical.' },
    {id: '3', question:'Empregar grandes quantidades de produto, se possivel com o uso de vários extintores ao mesmo tempo.' },
    {id: '4', question:'Dirigir o jato para o meio do fogo.' }
]; 


const columns = [
    { dataField: 'id',text: 'Product ID', hidden: true },
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
