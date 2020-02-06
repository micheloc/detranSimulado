import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'Ultrapassar outro veículo em movimento somente pela direita.' },
  {id: 'B', question:'Transitar sempre na faixa da direita quando se deslocar em maior velocidade.' },
  {id: 'C', question:'Seguir veículo em serviço de urgência.' },
  {id: 'D', question:'Dar sempre preferência de passagem aos veículos que se deslocam sobre trilhos.' }
]; 


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_27 extends Component {
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

export default Question_27;
