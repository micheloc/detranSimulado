import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Peso bruto total e o peso máximo que o veículo transmite ao pavimento, referente ao peso total de sua carga.' },
  { id: 'B', question: 'Freio de serviço e o dispositivo destinado a provocara diminuição da marcha do veículo ou pará-lo.' },
  { id: 'C', question: 'Passagem por outro veículo é o movimento de passar à frente de outro veículo que desloca no mesmo sentido e na mesma faixa de trânsito.' },
  { id: 'D', question: 'Passagem de nível é uma obra da construção civil destinada transpor uma depressão do terreno ou servir de passagem superior.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_15 extends Component {
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

export default Question_15;
