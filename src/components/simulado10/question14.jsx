import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Não será tolerado nenhum percentual sobre os limites de peso bruto transmitido por eixo.' },
  { id: 'B', question: 'As modificações nas características dos veículos poderão ser feitas pelo proprietário ou responsável, sem prévia autorização da autoridade de trânsito.' },
  { id: 'C', question: 'As combinações para transporte de veículos que excedam os limites permitidos pela Legislação, não necessitam de autorização especial de trânsito.' },
  { id: 'D', question: 'O veículo de carga deverá estar devidamente equipado, quando transitar, de modo a evitar derramamento de carga sobre a via.' }
];

const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_14 extends Component {
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

export default Question_14;
