import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'O máximo possivel do eixo da via, caso se trate de uma via arterial de circulação nos dois sentidos, para realizar uma conversão à direita.' },
  { id: 'B', question: 'Do bordo direito, tratando-se de uma via coletora de dois sentidos, para realizar uma conversão à esquerda.' },
  { id: 'C', question: 'O máximo possivel do bordo direito da pista para realizar uma conversão à direita em uma via coletora.' },
  { id: 'D', question: 'Do bordo esquerdo, tratando-se de uma via coletora de dois sentidos, para realizar uma conversão à esquerda.' }
];

const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_4 extends Component {
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

export default Question_4;
