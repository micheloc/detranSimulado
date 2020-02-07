import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Os veículos movidos a álcool só eliminam gás carbônico (CO2).' },
  { id: 'B', question: 'O CFC (clorofluorcaboneto), presente em muitos aparelhos de ar condicionado dos veículos, pode vazar e contribuir para a destruição da camada de ozônio.' },
  { id: 'C', question: 'O monóxido de carbono não mata por asfixia química nem impede o oxigênio de chegar às células.' },
  { id: 'D', question: 'A poluição do ar produzida pelos automóveis não aumenta o efeito estufa.' }
];


const columns = [
  { dataField: 'id',text: ' ',           headerStyle: () => { return { width: '10%', textAlign: 'center' } }},
  { dataField: 'question', text: ' ',  headerStyle: () => { return { width: '90%', textAlign: 'center' } }},
];
export class question1 extends Component {
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

export default question1;
