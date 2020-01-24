import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Borda da pista é a margem da pista, podendo ser demarcada por faixas transversais que delineiam a parte da via destinada ao estacionamento de veículos.' },
  { id: 'B', question: 'Caminhão-trator é o veículo automotor destinado a realizar trabalhos agrícolas de construção e pavimentação.' },
  { id: 'C', question: 'Canteiro central é o obstáculo físico como separador de duas pistas de rolamento.' },
  { id: 'D', question: 'Caminhonete é um veículo destinado a realizar transporte de passageiros e de carga no mesmo compartilhamento, com peso bruto total de até três mil e quinhentos quilogramas.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];


export class Question_22 extends Component {
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

export default Question_22;
