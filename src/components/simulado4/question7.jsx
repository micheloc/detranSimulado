import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'As vias pavimentadas urbanas, sem sinalização, poderão ser abertas ao trânsito só para veículos de tração animal.' },
  { id: 'B', question: 'A fixação de publicidade ou de qualquer legenda ou simbolos ao longo das vias poderá ser feito, sem prejuízo para a segurança.' },
  { id: 'C', question: 'No caso de uma obra ou evento, a responsabilidade de sinalizar é do responsável pela execução.' },
  { id: 'D', question: 'Nas vias públicas e nos imóveis é permitido colocar luzes, fixar publicidade e inscrições, sempre que necessário, sem autorização da autoridade competente.' }
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
