import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Conduzir a vitima ao hospital o mais rápido possivel e de qualquer forma' },
  { id: 'B', question: 'São cuidados que devem ser tornados em caso de acidentes até a chegada do serviço de socorro.' },
  { id: 'C', question: 'É a oportunidade de se tornar herói.' },
  { id: 'D', question: 'É a sua chance de testar o que aprendeu.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_24 extends Component {
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

export default Question_24;
