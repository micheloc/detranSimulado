import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap'; 
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'Verificar se há um médico no local.' },
  {id: 'B', question:'Garantir a chegada da polícia.' },
  {id: 'C', question:'Manter a calma, garantir a segurança e pedir socorro.' },
  {id: 'D', question:'Ligue para o 190.' }
]; 


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' }}},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' }}},
];

export class Question_30 extends Component {
  constructor(props){
    super(props); 
    this.state={openSelect: true}
    this._handleSelect = this._handleSelect.bind(this); 
  }

  componentDidMount(){
    this.props.habilitar(this.state.openSelect)
  }
    
  _handleSelect(row, isSelect){
    if (isSelect ===  true)
      this.setState({openSelect: null}, () => {
        this.props.alternativa(row.id, this.state.openSelect);
      })
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
