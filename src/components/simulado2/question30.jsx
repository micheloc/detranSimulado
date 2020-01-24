import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap'; 
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'O ser humano já domina as forças da natureza.' },
  {id: 'B', question:'A luta pela preservação ambiental é missão de todos.' },
  {id: 'C', question:'A natureza é limitada e pode ser destruída pelas ações humanas.' },
  {id: 'D', question:'Os homens têm desprezado os seres que com ele convivem no meio ambiente.' }
]; 


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' }}},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' }}},
];

export class Question_30 extends Component {
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

export default Question_30;
