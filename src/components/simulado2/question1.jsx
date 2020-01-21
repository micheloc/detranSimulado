import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  {id: 'A', question:'Ficar ao lado deles e avisá-los que deverão transitar próximos ao meio-fio.' },
  {id: 'B', question:'Passar perto deles para forçá-lós a transitar na calçada ou junto ao meio-fio.' },
  {id: 'C', question:'Reduzir a velocidade de forma compativel com o trânsito e guardar distância lateral 1,5 metros.' },
  {id: 'D', question:'Não se incomodar, pois ciclistas não representam motivos para preocupação.' }
]; 

const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];

export class Question_1 extends Component {
  constructor(props){
    super(props); 
    this.state={}
    this._handleSelect = this._handleSelect.bind(this); 
  }
    
  _handleSelect(row){
    this.props.alternativa(row.id);
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
