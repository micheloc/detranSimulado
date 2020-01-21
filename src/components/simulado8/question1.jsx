import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'Altura máxima permitida.' },
  {id: 'B', question:'Altura limitada.' },
  {id: 'C', question:'Largura limitada.' },
  {id: 'D', question:'Comprimento máximo permitido.' }
]; 

const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_1 extends Component {
  constructor(props){
    super(props); 
    this.state={}
    this._handleSelect = this._handleSelect.bind(this); 
  }
    
  _handleSelect(row){
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

export default Question_1;
