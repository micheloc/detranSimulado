import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'Poderá estacionar desde que o condutor e passageiros saiam do veículo.' },
  {id: 'B', question:'Poderá estacionar o veículo em fila dupla.' },
  {id: 'C', question:'Poderá parar apenas e no tempo suficiente para embarque ou desembarque de passageiros.' },
  {id: 'D', question:'Poderá parar apenas para descarregar cargas em grande quantidade.' }
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
