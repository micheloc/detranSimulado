import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const question = [
  { id: 'A', question: 'Os caracteres das placas serão individualizados para cada veículo e o acompanharão até a baixa do registro, sendo vedado seu reaproveitamento.' },
  { id: 'B', question: 'Nos veículos de transporte de carga e os coletivos de passageiros, deverão constar sua tara e o peso bruto total (PBT) em qualquer parte da carroceria.' },
  { id: 'C', question: 'É permitida a utilização de adesivo em subsitituição da placa dianteira dos automóveis.' },
  { id: 'D', question: 'Os veículos de três rodas são dispensados das placas de identificação.' }
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
