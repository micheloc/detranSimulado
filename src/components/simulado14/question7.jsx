import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
    { id: '1', question: 'Os caracteres das placas serão individualizados para cada veículo e o acompanharão até a baixa do registro, sendo vedado seu reaproveitamento.' },
    { id: '2', question: 'Nos veículos de transporte de carga e os coletivos de passageiros, deverão constar sua tara e o peso bruto total (PBT) em qualquer parte da carroceria.' },
    { id: '3', question: 'É permitida a utilização de adesivo em subsitituição da placa dianteira dos automóveis.' },
    { id: '4', question: 'Os veículos de três rodas são dispensados das placas de identificação.' }
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
