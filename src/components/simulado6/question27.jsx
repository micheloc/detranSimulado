import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'Ramo da ciência que estuda o ser vivo.' },
  {id: 'B', question:'Ramo do saber ético que se ocupa dos valores morais de respeito à pessoa humana no campo das ciências da vida.' },
  {id: 'C', question:'Ramos do saber, pertencente à química, que se ocupa dos valores quânticos, no campo das ciências.' },
  {id: 'D', question:'Ramo do saber que não tem relação com a ecologia.' }
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
