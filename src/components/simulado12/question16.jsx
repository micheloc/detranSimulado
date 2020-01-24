import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap'; 
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'Fundo cinza e caracteres pretos.' },
  {id: 'B', question:'Fundo preto e caracteres brancos.' },
  {id: 'C', question:'Fundo preto e caracteres cinzas.' },
  {id: 'D', question:'Fundo azul e caracteres brancos.' }
]; 


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_16 extends Component {
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

export default Question_16;
