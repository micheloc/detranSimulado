import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'De 03 (Três) em 03  (Três) anos.' },
  {id: 'B', question:'De 02 (Dois) em 02  (Dois) anos.' },
  {id: 'C', question:'De 05 (Cinco) em 05 (Cinco) anos.' },
  {id: 'D', question:'De 10 (Dez) em 10 (Dez) anos.' }
]; 

const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_1 extends Component {
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

export default Question_1;
