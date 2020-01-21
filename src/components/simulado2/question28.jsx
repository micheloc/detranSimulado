import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Envolver o segmento amputado em plástico limpo ou atadura embebida em soro fisiológico e logo após, colocar o membro em um recipiente com gelo.' },
  { id: 'B', question: 'Envovler o segmento amputado em plástico limpo e mantê-lo aquecido.' },
  { id: 'C', question: 'Lavar com soro fisiológico o segmento amputado e colocá-lo em contato direto com gelo.' },
  { id: 'D', question: 'Colocar o segmento amputado em um recipiente com água fria e levá-lo para um hospital.' }
];

const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_28 extends Component {
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

export default Question_28;
