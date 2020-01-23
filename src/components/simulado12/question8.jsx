import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'A notificação devolvida por desatualização do endereço será considerada inválida.' },
  { id: 'B', question: 'O recurso em primeira instância, contra a imposição de multa poderá ser interposto no prazo legal, sem o recolhimento do seu valor.' },
  { id: 'C', question: 'O pagamento da multa poderá ser efetuado até a data do vencimento expressa na notificação da penalidade, por 60% do seu valor.' },
  { id: 'D', question: 'Das decisões da JARI não cabe recurso.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];
export class Question_8 extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect(row) {
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

export default Question_8;
