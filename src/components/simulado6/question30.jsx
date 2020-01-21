import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap'; 
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'Reposto quando for totalmente consumido.' },
  {id: 'B', question:'Trocado de seis em seis meses.' },
  {id: 'C', question:'Trocado de acordo com a quilometragem prevista pelo fabricante.' },
  {id: 'D', question:'Completado somente quando estiver abaixo do nivel.' }
]; 


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' }}},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' }}},
];

export class Question_30 extends Component {
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

export default Question_30;
