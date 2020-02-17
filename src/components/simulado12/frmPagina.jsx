import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap';
import Question1 from './question1';
import Question2 from './question2';
import Question3 from './question3';
import Question4 from './question4';
import Question5 from './question5';
import Question6 from './question6'; 
import Question7 from './question7'; 
import Question8 from './question8'; 
import Question9 from './question9'; 
import Question10 from './question10'; 

import Question11 from './question11';
import Question12 from './question12';
import Question13 from './question13';
import Question14 from './question14';
import Question15 from './question15';
import Question16 from './question16';
import Question17 from './question17';
import Question18 from './question18';
import Question19 from './question19';
import Question20 from './question20'; 

import Question21 from './question21';
import Question22 from './question22';
import Question23 from './question23';
import Question24 from './question24';
import Question25 from './question25';
import Question26 from './question26';
import Question27 from './question27';
import Question28 from './question28';
import Question29 from './question29';
import Question30 from './question30'; 

import a37 from '../imagens/A-37.png'; 
import r24a from '../imagens/R-24a.jpg'; 
import s3 from '../imagens/s 3.jpg'; 

var selectList = [];
var Errors = []; 
var numberSelect = "";
var contAcerto = 0;
var contError = 0; 

export class frmPagina extends Component {
  constructor(props){
    super(props); 
    this.state={
      questao1: true, 
      questao2: false,
      questao3: false, 
      questao4: false, 
      questao5: false,  
      questao6: false, 
      questao7: false, 
      questao8: false, 
      questao9: false, 
      questao10: false,
      questao11: false,
      questao12: false,
      questao13: false,
      questao14: false,
      questao15: false,
      questao16: false,
      questao17: false,
      questao18: false,
      questao19: false,
      questao20: false,
      questao21: false,
      questao22: false,
      questao23: false,
      questao24: false,
      questao25: false,
      questao26: false,
      questao27: false,
      questao28: false,
      questao29: false,
      questao30: false,
      resultado: false, 
      activateNext: true, 
      resposta: [
        { resp: 'C', questao: '1'},
        { resp: 'B', questao: '2'},
        { resp: 'A', questao: '3'},
        { resp: 'C', questao: '4'},
        { resp: 'D', questao: '5'},
        { resp: 'A', questao: '6'}, 
        { resp: 'B', questao: '7'}, 
        { resp: 'B', questao: '8'}, 
        { resp: 'C', questao: '9'}, 
        { resp: 'A', questao: '10'}, 
        { resp: 'B', questao: '11'},
        { resp: 'A', questao: '12'},
        { resp: 'B', questao: '13'},
        { resp: 'A', questao: '14'},
        { resp: 'D', questao: '15'},
        { resp: 'C', questao: '16'},
        { resp: 'A', questao: '17'},
        { resp: 'C', questao: '18'},
        { resp: 'A', questao: '19'},
        { resp: 'D', questao: '20'},
        { resp: 'B', questao: '21'},
        { resp: 'D', questao: '22'},
        { resp: 'A', questao: '23'},
        { resp: 'C', questao: '24'},
        { resp: 'D', questao: '25'},
        { resp: 'D', questao: '26'},
        { resp: 'D', questao: '27'},
        { resp: 'A', questao: '28'},
        { resp: 'C', questao: '29'},
        { resp: 'B', questao: '30'},
      ], 
    }
    this._alterQuestion = this._alterQuestion.bind(this); 
    this._selectQuestion = this._selectQuestion.bind(this);
    this._openNext = this._openNext.bind(this);
  }

  _alterQuestion(question){
    if (question === "1"){
      this.setState({questao1: !this.state.questao1});
      this.setState({questao2: !this.state.questao2}); 
    }
    if (question === "2"){
      this.setState({questao2: !this.state.questao2});
      this.setState({questao3: !this.state.questao3});
    }
    if (question === "3") {
      this.setState({ questao3: !this.state.questao3 });
      this.setState({ questao4: !this.state.questao4 });
    }
    if (question === "4") {
      this.setState({ questao4: !this.state.questao4 });
      this.setState({ questao5: !this.state.questao5 });
    }
    if (question === "5") {
      this.setState({ questao5: !this.state.questao5 });
      this.setState({ questao6: !this.state.questao6 });
    }
    if (question === "6") {
      this.setState({ questao6: !this.state.questao6 });
      this.setState({ questao7: !this.state.questao7 });
    }
    if (question === "7") {
      this.setState({ questao7: !this.state.questao7 });
      this.setState({ questao8: !this.state.questao8 });
    }
    if (question === "8") {
      this.setState({ questao8: !this.state.questao8 });
      this.setState({ questao9: !this.state.questao9 });
    }
    if (question === "9") {
      this.setState({ questao9: !this.state.questao9 });
      this.setState({ questao10: !this.state.questao10 });
    }

    if (question === "10") {
      this.setState({ questao10: !this.state.questao10 });
      this.setState({ questao11: !this.state.questao11 });
    }
    if (question === "11") {
      this.setState({ questao11: !this.state.questao11 });
      this.setState({ questao12: !this.state.questao12 });
    }
    if (question === "12") {
      this.setState({ questao12: !this.state.questao12 });
      this.setState({ questao13: !this.state.questao13 });
    }
    if (question === "13") {
      this.setState({ questao13: !this.state.questao13 });
      this.setState({ questao14: !this.state.questao14 });
    }
    if (question === "14") {
      this.setState({ questao14: !this.state.questao14 });
      this.setState({ questao15: !this.state.questao15 });
    }
    if (question === "15") {
      this.setState({ questao15: !this.state.questao15 });
      this.setState({ questao16: !this.state.questao16 });
    }
    if (question === "16") {
      this.setState({ questao16: !this.state.questao16 });
      this.setState({ questao17: !this.state.questao17 });
    }
    if (question === "17") {
      this.setState({ questao17: !this.state.questao17 });
      this.setState({ questao18: !this.state.questao18 });
    }
    if (question === "18") {
      this.setState({ questao18: !this.state.questao18 });
      this.setState({ questao19: !this.state.questao19 });
    }
    if (question === "19") {
      this.setState({ questao19: !this.state.questao19 });
      this.setState({ questao20: !this.state.questao20 });
    }

    if (question === "20") {
      this.setState({ questao20: !this.state.questao20 });
      this.setState({ questao21: !this.state.questao21 });
    }
    if (question === "21") {
      this.setState({ questao21: !this.state.questao21 });
      this.setState({ questao22: !this.state.questao22 });
    }
    if (question === "22") {
      this.setState({ questao22: !this.state.questao22 });
      this.setState({ questao23: !this.state.questao23 });
    }
    if (question === "23") {
      this.setState({ questao23: !this.state.questao23 });
      this.setState({ questao24: !this.state.questao24 });
    }
    if (question === "24") {
      this.setState({ questao24: !this.state.questao24 });
      this.setState({ questao25: !this.state.questao25 });
    }
    if (question === "25") {
      this.setState({ questao25: !this.state.questao25 });
      this.setState({ questao26: !this.state.questao26 });
    }
    if (question === "26") {
      this.setState({ questao26: !this.state.questao26 });
      this.setState({ questao27: !this.state.questao27 });
    }
    if (question === "27") {
      this.setState({ questao27: !this.state.questao27 });
      this.setState({ questao28: !this.state.questao28 });
    }
    if (question === "28") {
      this.setState({ questao28: !this.state.questao28 });
      this.setState({ questao29: !this.state.questao29 });
    }
    if (question === "29") {
      this.setState({ questao29: !this.state.questao29 });
      this.setState({ questao30: !this.state.questao30 });
    }

    selectList.push(numberSelect); 
  }

  _selectQuestion(question, select){
    this.setState({activateNext: select})
    numberSelect = question; 
  }

  _openNext(habilitar){
    this.setState({activateNext: habilitar})
  }

  _endQuestions(){
    this._alterQuestion();
    for (var i = 0; i < selectList.length; i++) {

      if (selectList[i] === this.state.resposta[i].resp) {
        contAcerto += 1;
      } else {
        Errors.push("Questão : " + i + "  = " + this.state.resposta[i].resp); 
        contError += 1;
      }
    }
    this.setState({ questao30: !this.state.questao30 });
    this.setState({ resultado: !this.state.resultado });
  }

  render() {
    return (
      <div>
        {this.state.questao1 ? 
          <Card>
            <CardHeader> <b>(1)</b> : Em locais onde há proibição de estacionar, o condutor: </CardHeader>
            <CardBody><Question1 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('1')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao2 ?
          <Card>
            <CardHeader><b>(2)</b> : Quando uma pista de rolamento de mão dupla for dividida ao centro por duas faixas amarelas continuas, isto significa: </CardHeader>
            <CardBody><Question2 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('2')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao3 ?
          <Card>
            <CardHeader> <b>(3)</b> : É proibido a todo condutor de veículo: </CardHeader>
            <CardBody><Question3 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('3')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao4 ?
          <Card>
            <CardHeader> <b>(4)</b> : A pontuação de uma infração de natureza grave é : </CardHeader>
            <CardBody><Question4 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('4')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao5 ?
          <Card>
            <CardHeader> <b>(5)</b> : Tem por finalidade alertar os usuários da via para condições potencialmente perigosas, indicando sua natureza, cuja mensagem possui caráter de recomendação: </CardHeader>
            <CardBody><Question5 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('5')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao6 ?
          <Card>
            <CardHeader><b>(6)</b> : A quem compete a aplicação da penalidade de multa ?</CardHeader>
            <CardBody><Question6 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('6')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao7 ?
          <Card>
            <CardHeader><b>(7)</b> : O candidato para se habilitar na categoria "D" deverá realizar o exame de direção em um veículo: </CardHeader>
            <CardBody><Question7 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('7')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao8 ?
          <Card>
            <CardHeader><b>(8)</b> : Quanto à aplicação de penalidades podemos afirmar que: </CardHeader>
            <CardBody><Question8 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('8')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao9 ?
          <Card>
            <CardHeader><b>(9)</b> : Organizar e manter o registro nacional de veículos automotores (RENAVAM) é competência do: </CardHeader>
            <CardBody><Question9 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('9')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao10 ?
          <Card>
            <CardHeader><b>(10)</b> : As faixas da esquerda deverão ser usadas, em uma pista de rolamento com várias faixas de trânsito no mesmo sentido para: </CardHeader>
            <CardBody><Question10 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('10')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}



        {this.state.questao11 ?
          <Card>
            <CardHeader><b>(11)</b> : O embarque e desembarque de passageiros do transporte coletivo deverá acontecer :</CardHeader>
            <CardBody><Question11 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('11')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao12 ?
          <Card>
            <CardHeader> <b>(12)</b> : As medidas administrativas adotadas pela autoridade de trânsito ou seus agentes têm por objetivos: </CardHeader>
            <CardBody><Question12 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('12')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao13 ?
          <Card>
            <CardHeader> <b>(13)</b> : A alteração da característica de identificação do veículo, somente poderá ser feita: </CardHeader>
            <CardBody><Question13 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('13')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao14 ?
          <Card>
            <CardHeader> <b>(14)</b> : As cores das placas de identificação dos veículos registrados como de aluguel, serão: </CardHeader>
            <CardBody><Question14 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('14')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao15 ?
          <Card>
            <CardHeader> <b>(15)</b> : Quanto à sinalização de trânsito podemos afirmar que: </CardHeader>
            <CardBody><Question15 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('15')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao16 ?
          <Card>
            <CardHeader> <b>(16)</b> : As cores das placas de identificação dos veículos registrados como pertencentes a coleção, serão: </CardHeader>
            <CardBody><Question16 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('16')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao17 ?
          <Card>
            <CardHeader> <b>(17)</b> : O recolhimento da Carteira Nacional de Habilitação ocorrerá quando o condutor: </CardHeader>
            <CardBody><Question17 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('17')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao18 ?
          <Card>
            <CardHeader> <b>(18)</b> : Via de trânsito rápido é aquela caracterizada por: </CardHeader>
            <CardBody><Question18 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('18')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao19 ?
          <Card>
            <CardHeader> <b>(19)</b> : A pontuação de uma infração de natureza média é : </CardHeader>
            <CardBody><Question19 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('19')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao20 ?
          <Card>
            <CardHeader> <b>(20)</b> : Segundo a legislação de trânsito, é permitido transitar em marcha à ré, para:</CardHeader>
            <CardBody><Question20 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('20')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}

        {this.state.questao21 ?
          <Card>
            <CardHeader> <b>(21)</b> : Caso a decisão da JARI seja desfavorável a um recurso interposto, sobre uma multa de natureza gravíssima, imposta pelo DNIT, o recurso de segunda instância, será encaminhado ao:</CardHeader>
            <CardBody><Question21 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('21')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao22 ?
          <Card>
            <CardHeader> <b>(22)</b> : De acordo com a legislação de trânsito, os veículos quanto à categoria, classificam-se em: </CardHeader>
            <CardBody><Question22 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('22')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao23 ?
          <Card>
            <CardHeader> <b>(23)</b> : Em uma rotatória onde não há sinalização, a preferência de passagem é do veículo que: </CardHeader>
            <CardBody><Question23 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('23')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao24 ?
          <Card>
            <CardHeader> <b>(24)</b> : As linhas divisoras de fluxos continuas de cor amarela significam: </CardHeader>
            <CardBody><Question24 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('24')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao25 ?
          <Card>
            <CardHeader> <b>(25)</b> : A Licença para aprendizagem de direção veicular (LADV) na via ou em locais autorizados para este fim, será expedida pelo DETRAN ao candidato que: </CardHeader>
            <CardBody><Question25 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('25')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao26 ?
          <Card>
            <CardHeader> <b>(26)</b> : Quando o condutor for habilitado em mais de uma categoria terá:  </CardHeader>
            <CardBody><Question26 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('26')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao27 ?
          <Card>
            <CardHeader> <b>(27)</b> : Na estrutura do sistema nacional de trânsito, são órgãos normativos:  </CardHeader>
            <CardBody><Question27 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('27')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao28 ?
          <Card>
            <CardHeader> <b>(28)</b> : É motivo de suspensão do direito de dirigir quando o condutor cometer a seguinte infração de trânsito: </CardHeader>
            <CardBody><Question28 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('28')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao29 ?
          <Card>
            <CardHeader> <b>(29)</b> : O agente da autoridade de trânsito competente para lavrar o auto de infração poderá ser : </CardHeader>
            <CardBody><Question29 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('29')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao30 ?
          <Card>
            <CardHeader> <b>(30)</b> : Qual nome que se dá às taxas recolhidas pelos órgãos de trânsito, provenientes das infrações de trânsito? </CardHeader>
            <CardBody><Question30 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._endQuestions() }} disabled={this.state.activateNext}>Finalizar</Button></CardFooter>
          </Card>
        : null}

        {this.state.resultado ?
          <Card>
            <CardHeader><center><h1>Gabarito</h1></center></CardHeader>
            <CardBody>
              <center>
                <table border="1">
                  <tbody>
                    <tr key="gabarito"><th  key={1} colSpan={this.state.resposta.length}> <center><h4>{parseInt(contError) > 9 ? "Reprovado (Acertos : " :"Aprovado (Acertos : " }{contAcerto + ")"}</h4></center></th></tr>
                    <tr key="alternativas1">{this.state.resposta.map(opt => <th  key={opt.questao} style={{width:'45px', color: 'blue'}}><center>{opt.questao}</center></th>)}</tr>
                    <tr key="respostas">{this.state.resposta.map(opt => <th  key={opt.questao} style={{width:'45px'}}><center>{opt.resp}</center></th>)}</tr>
                    <tr key="questaoSelecionada">{this.state.resposta.map((opt, index)=> <th key={index} style={{width:'45px', color: 'red'}}><center>{opt.questao}</center></th>)}</tr>
                    <tr key="respostaSeleciona">{selectList.map((opt, index) => <th  key={index} style={{width:'45px'}}><center>{opt}</center></th>)}</tr>
                  </tbody>
                </table>
                <br/>
                <h3>Questão marcadas erradas:</h3>
                {Errors.map(opt => <p>{opt}</p>)}
              </center>
            </CardBody>
          </Card>
          : null}
      </div>
    );
  }
}

export default frmPagina;
