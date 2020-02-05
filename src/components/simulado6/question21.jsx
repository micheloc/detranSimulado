import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'O prazo minimo desta suspensão será de um mês até o máximo de um ano.' },
  { id: 'B', question: 'Somente poderá ser aplicada ao condutor que atingir mais de 20 pontos em seu pontuário.' },
  { id: 'C', question: 'A CNH será devolvida a seu titular, imediatamente depois de cumprido o prazo da penalidade e o curso de reciclagem.' },
  { id: 'D', question: 'No caso de reincidência no período de doze meses, o prazo será de seis meses até o máximo de dois anos.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_21 extends Component {
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

export default Question_21;
