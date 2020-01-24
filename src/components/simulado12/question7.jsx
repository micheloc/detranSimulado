import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Que tenha capacidade para transportar no minimo, 6.000kg (seis mil) quilogramas de carga.' },
  { id: 'B', question: 'Motorizado utilizado no transporte de passageiros, registrado com capacidade mínima de 20(vinte) lugares.' },
  { id: 'C', question: 'Registrado como de transporte de passageiros que tenha, no mínimo 08 (Oito) lugares.' },
  { id: 'D', question: 'Que tenha capacidade para transportar 3,5 (três virgula cinco) toneladas de carga e mais de 08 (oito) passageiros.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];
    
export class Question_7 extends Component {
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

export default Question_7;
