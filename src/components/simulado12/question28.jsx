import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Dirigir ameaçnado os pedestres que estejam atravessando a via pública, ou os demais veículos.' },
  { id: 'B', question: 'Desobedecer às ordens da autoridade competente de trânsito ou de seus agentes.' },
  { id: 'C', question: 'Deixar o condutor de prestar socorro à vitima de acidente de trânsito quando solicitado pela autoridade e seus agentes.' },
  { id: 'D', question: 'Dirigir veículos com a carteira nacional de habilitação vencida há mais de 30 (trinta) dias.' }
];

const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_28 extends Component {
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

export default Question_28;
