import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Prevenir o estado de choque.' },
  { id: 'B', question: 'Envolver as regiões queimadas com panos limpos e úmidos.' },
  { id: 'C', question: 'Perfurar bolhas formadas na pele.' },
  { id: 'D', question: 'Chamar por socorro especializado.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_25 extends Component {
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

export default Question_25;
