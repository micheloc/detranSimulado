import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'É recomendado para queimaduras de 2º gráu' },
  { id: 'B', question: 'É contraindicado para os casos de amputação, avulsão e esmagamento.' },
  { id: 'C', question: 'É utilizado apenas por profissionais e, mesmo assim, em caráter de exceção.' },
  { id: 'D', question: 'Pode ser aplicado por um condutor que não seja um profissional de saúde.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];
export class Question_9 extends Component {
  constructor(props) {
  super(props);
  this.state = {};
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

export default Question_9;
