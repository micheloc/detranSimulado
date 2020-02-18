import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button, Row } from 'reactstrap';
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

import S8 from '../imagens/S8.jpg';
import S11 from '../imagens/S11.png'; 
import S12 from '../imagens/S12.png'; 
import S13 from '../imagens/S13.png'; 
import S14 from '../imagens/S14.png'; 
import S16 from '../imagens/S16.jpg'; 
import R20 from '../imagens/R20.png'; 
import R8b from '../imagens/R8b.jpg'; 
import R35b from '../imagens/R35b.png'; 
import R21 from '../imagens/R21.png'; 
import R5b from '../imagens/R5b.jpg'; 
import R18 from '../imagens/R18.png'; 
import R36b from '../imagens/R36b.jpg'; 
import R24b from '../imagens/R24b.png'; 
import R15 from  '../imagens/R15.png'; 
import R23 from '../imagens/R23.jpg'; 
import A29 from '../imagens/A29.png'; 
import A31 from '../imagens/A 31.jpg'; 
import A2b from '../imagens/A2b.png'; 
import A30a from '../imagens/A30a.png'; 
import A33b from '../imagens/A33b.png'; 
import A44 from '../imagens/A44.png'; 
import A35 from '../imagens/A35.png'; 
import A43 from '../imagens/A43.png';
import A6 from  '../imagens/A6.png';
import A21a from '../imagens/A21a.png'; 
import A32b from '../imagens/A32b.jpg'; 
import A24 from '../imagens/A24.png'; 
import A11b from '../imagens/A11b.png'; 
import A41 from '../imagens/A41.jpg'; 


var selectList = [];
var Errors = []; 
var numberSelect = ""
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
        { resp: 'D', questao: '1'},
        { resp: 'D', questao: '2'},
        { resp: 'D', questao: '3'},
        { resp: 'B', questao: '4'},
        { resp: 'A', questao: '5'},
        { resp: 'B', questao: '6'}, 
        { resp: 'B', questao: '7'}, 
        { resp: 'B', questao: '8'}, 
        { resp: 'D', questao: '9'}, 
        { resp: 'D', questao: '10'}, 
        { resp: 'A', questao: '11'},
        { resp: 'D', questao: '12'},
        { resp: 'C', questao: '13'},
        { resp: 'D', questao: '14'},
        { resp: 'C', questao: '15'},
        { resp: 'D', questao: '16'},
        { resp: 'D', questao: '17'},
        { resp: 'C', questao: '18'},
        { resp: 'A', questao: '19'},
        { resp: 'D', questao: '20'},
        { resp: 'D', questao: '21'},
        { resp: 'C', questao: '22'},
        { resp: 'B', questao: '23'},
        { resp: 'C', questao: '24'},
        { resp: 'B', questao: '25'},
        { resp: 'D', questao: '26'},
        { resp: 'A', questao: '27'},
        { resp: 'D', questao: '28'},
        { resp: 'B', questao: '29'},
        { resp: 'D', questao: '30'},
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

    for (var i = 0; i < selectList.length; i++){
      
      if (selectList[i] === this.state.resposta[i].resp){
        contAcerto += 1; 
      }else{
        Errors.push("Questão : " + ( i + 1 ) + "  = " + selectList[i]);  
        contError +=1; 
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
            <CardHeader> <b>(1)</b> : Qual o nome técnico da placa S-8? <img src={S8} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question1 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('1')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao2 ?
          <Card>
            <CardHeader> <b>(2)</b> : Qual o nome técnico da placa S-11? <img src={S11} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question2 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('2')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao3 ?
          <Card>
            <CardHeader> <b>(3)</b> : Qual o nome técnico da placa S-12? <img src={S12} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question3 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('3')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao4 ?
          <Card>
            <CardHeader>  <b>(4)</b> : Qual o nome técnico da placa S-13? <img src={S13} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question4 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('4')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao5 ?
          <Card>
            <CardHeader>  <b>(5)</b> : Qual o nome técnico da placa S-14? <img src={S14} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question5 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('5')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao6 ?
          <Card>
            <CardHeader>  <b>(6)</b> : Qual o nome técnico da placa S-16? <img src={S16} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question6 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('6')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao7 ?
          <Card>
            <CardHeader> <b>(7)</b> : Qual o nome técnico da placa R-20? <img src={R20} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question7 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('7')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao8 ?
          <Card>
            <CardHeader> <b>(8)</b> : Qual o nome técnico da placa R-8b? <img src={R8b} width="120px" height="120px" align="right" /> </CardHeader>
            <CardBody><Question8 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('8')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao9 ?
          <Card>
            <CardHeader>  <b>(9)</b> : Qual o nome técnico da placa R-35b? <img src={R35b} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question9 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('9')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao10 ?
          <Card>
            <CardHeader>  <b>(10)</b> : Qual o nome técnico da placa R21? <img src={R21} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question10 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('10')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}



        {this.state.questao11 ?
          <Card>
            <CardHeader>  <b>(11)</b> : Qual o nome técnico da placa R-5b? <img src={R5b} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question11 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('11')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao12 ?
          <Card>
            <CardHeader>  <b>(12)</b> : Qual o nome técnico da placa R-18? <img src={R18} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question12 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('12')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao13 ?
          <Card>
            <CardHeader>  <b>(13)</b> : Qual o nome técnico da placa R-36b? <img src={R36b} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question13 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('13')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao14 ?
          <Card>
            <CardHeader>  <b>(14)</b> : Qual o nome técnico da placa R-24b? <img src={R24b} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question14 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('14')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao15 ?
          <Card>
            <CardHeader>  <b>(15)</b> : Qual o nome técnico da placa R-15? <img src={R15} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question15 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('15')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao16 ?
          <Card>
            <CardHeader>  <b>(16)</b> : Qual o nome técnico da placa R-23? <img src={R23} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question16 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('16')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao17 ?
          <Card>
            <CardHeader>  <b>(17)</b> : Qual o nome técnico da placa A-29? <img src={A29} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question17 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('17')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao18 ?
          <Card>
            <CardHeader>  <b>(18)</b> : Qual o nome técnico da placa A-31? <img src={A31} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question18 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('18')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao19 ?
          <Card>
            <CardHeader>  <b>(19)</b> : Qual o nome técnico da placa A-2b? <img src={A2b} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question19 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('19')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao20 ?
          <Card>
            <CardHeader> <b>(20)</b> : Qual o nome técnico da placa A-30a: <img src={A30a} width="120px" height="120px" align="right"/></CardHeader>
            <CardBody><Question20 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('20')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}

        {this.state.questao21 ?
          <Card>
            <CardHeader>  <b>(21)</b> : Qual o nome técnico da placa A-33b? <img src={A33b} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question21 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('21')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao22 ?
          <Card>
            <CardHeader>  <b>(22)</b> : Qual o nome técnico da placa A-44? <img src={A44} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question22 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('22')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao23 ?
          <Card>
            <CardHeader>  <b>(23)</b> : Qual o nome técnico da placa A-35? <img src={A35} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question23 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('23')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao24 ?
          <Card>
            <CardHeader>  <b>(24)</b> : Qual o nome técnico da placa A-43? <img src={A43} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question24 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('24')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao25 ?
          <Card>
            <CardHeader>  <b>(25)</b> : Qual o nome técnico da placa A-6? <img src={A6} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question25 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('25')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao26 ?
          <Card>
            <CardHeader>  <b>(26)</b> : Qual o nome técnico da placa A-21a? <img src={A21a} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question26 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('26')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao27 ?
          <Card>
            <CardHeader>  <b>(27)</b> : Qual o nome técnico da placa A-32b? <img src={A32b} width="120px" height="120px" align="right" /> </CardHeader>
            <CardBody><Question27 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('27')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao28 ?
          <Card>
            <CardHeader>  <b>(28)</b> : Qual o nome técnico da placa A-24? <img src={A24} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question28 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('28')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao29 ?
          <Card>
            <CardHeader>  <b>(29)</b> : Qual o nome técnico da placa A-11b? <img src={A11b} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question29 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('29')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao30 ?
          <Card>
            <CardHeader>  <b>(30)</b> : Qual o nome técnico da placa A-41? <img src={A41} width="120px" height="120px" align="right" /></CardHeader>
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
                    <tr key={1}><td colSpan={this.state.resposta.length}> <center><h4>{parseInt(contError) > 9 ? "Reprovado (Acertos : " :"Aprovado (Acertos : " }{contAcerto + ")"}</h4></center></td></tr>
                    <tr key={2}>{this.state.resposta.map(opt => <td style={{width:'45px', color: 'blue'}}><center>{opt.questao}</center></td>)}</tr>
                    <tr key={3}>{this.state.resposta.map(opt => <td style={{width:'45px'}}><center>{opt.resp}</center></td>)}</tr>
                    <tr key={4}>{this.state.resposta.map(opt => <td style={{width:'45px', color: 'red'}}><center>{opt.questao}</center></td>)}</tr>
                    <tr key={5}>{selectList.map(opt => <td style={{width:'45px'}}><center>{opt}</center></td>)}</tr>
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
