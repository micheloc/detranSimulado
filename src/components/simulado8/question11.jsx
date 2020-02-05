import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Um veículo misto e ser registrado com peso bruto total (PBT) superior a 3.500 kg, além de poder transportar mais de 08(oito) passageiros.' },
  { id: 'B', question: 'Um veículo de passageiro com mais de 08 (oito) lugares, sem contar o lugar do condutor.' },
  { id: 'C', question: 'Um veículo motorizado utilizado no transporte de carga, registrado com capacidade mínima de Peso Bruto Total (PBT) de 6.000 kg.' },
  { id: 'D', question: 'Um veículo de carga e ser registrado com Peso Bruto Total (PBT) superior a 3.500 KG.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_11 extends Component {
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

export default Question_11;