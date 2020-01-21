import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Cronometrar o tempo gasto nos deslocamentos.' },
  { id: 'B', question: 'Estacionar o veículo sobre a calçada.' },
  { id: 'C', question: 'Verificar a documentação de porte obrigatório.' },
  { id: 'D', question: 'Dirigir sempre com atenção.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_11 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect(row) {
    this.props.alternativa(row.id);
  }

  render() {
    const selectRow = {
      mode: 'radio', 
      bgColor: '#bbb9b9',
      clickToSelect: true, 
      hideSelectColumn: true, 
      onSelect: this._handleSelect
    };

    return (
      <div><BootstrapTable keyField='id' data={question} columns={columns} selectRow={selectRow} /></div>
    );
  }
}

export default Question_11;