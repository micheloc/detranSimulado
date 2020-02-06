import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Dar pressão no Óleo.' },
  { id: 'B', question: 'Manter o nível do Óleo.' },
  { id: 'C', question: 'Tornar o Óleo mais fino.' },
  { id: 'D', question: 'Retirar as impurezas do Óleo.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];
    

export class Question_18 extends Component {
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

export default Question_18;
