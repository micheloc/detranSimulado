import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
    { id: '1', question: 'Borda da pista é a margem da pista, podendo ser demarcada por faixas transversais que delineiam a parte da via destinada ao estacionamento de veículos.' },
    { id: '2', question: 'Caminão-trator é o veículo automotor destinado a realizar trabalhos agrícolas de construção e pavimentação.' },
    { id: '3', question: 'Canteiro central é o obstáculo físico como separador de duas pistas de rolamento.' },
    { id: '4', question: 'Caminhonete é um veículo destinado a realizar transporte de passageiros e de carga no mesmo compartilhamento, com peso bruto total de até três mil e quinhentos quilogramas.' }
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
