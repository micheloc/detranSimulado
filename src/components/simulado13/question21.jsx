import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Usar a luz alta do farol.' },
  { id: 'B', question: 'Aumentar a velocidade para se livrar do trecho sob neblina.' },
  { id: 'C', question: 'Acender a luz baixa do farol e reduzir a velocidade.' },
  { id: 'D', question: 'Diminuir a distância em relação ao veículo da frente.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_21 extends Component {
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

export default Question_21;
