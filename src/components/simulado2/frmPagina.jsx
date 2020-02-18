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

import r25b from '../imagens/A25b.png'; 
import a4b from '../imagens/A4B.jpg'; 
import s9 from '../imagens/S9.jpg'; 

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
        { resp: 'C', questao: '2'},
        { resp: 'B', questao: '3'},
        { resp: 'D', questao: '4'},
        { resp: 'D', questao: '5'},
        { resp: 'B', questao: '6'}, 
        { resp: 'A', questao: '7'}, 
        { resp: 'A', questao: '8'}, 
        { resp: 'C', questao: '9'}, 
        { resp: 'D', questao: '10'}, 
        { resp: 'D', questao: '11'},
        { resp: 'B', questao: '12'},
        { resp: 'A', questao: '13'},
        { resp: 'D', questao: '14'},
        { resp: 'A', questao: '15'},
        { resp: 'B', questao: '16'},
        { resp: 'D', questao: '17'},
        { resp: 'C', questao: '18'},
        { resp: 'A', questao: '19'},
        { resp: 'A', questao: '20'},
        { resp: 'A', questao: '21'},
        { resp: 'D', questao: '22'},
        { resp: 'C', questao: '23'},
        { resp: 'A', questao: '24'},
        { resp: 'D', questao: '25'},
        { resp: 'D', questao: '26'},
        { resp: 'A', questao: '27'},
        { resp: 'A', questao: '28'},
        { resp: 'B', questao: '29'},
        { resp: 'A', questao: '30'},
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
            <CardHeader> <b>(1)</b> : Você está dirigindo e verifica que há ciclistas no trânsito. Qual o procedimento mais adequado ao ultrapassá-los?</CardHeader>
            <CardBody><Question1 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('1')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao2 ?
          <Card>
            <CardHeader> <b>(2)</b> : As cores das placas de identificação dos veículos em experiência, serão: </CardHeader>
            <CardBody><Question2 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('2') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao3 ?
          <Card>
            <CardHeader> <b>(3)</b> : De acordo com a legislação de trânsito, os veículos quanto à categoria classificam-se em: </CardHeader>
            <CardBody><Question3 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('3') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao4 ?
          <Card>
            <CardHeader> <b>(4)</b> : Ao aproximar-se de um cruzamento não sinalizado, a atitude defensiva de um condutor será:</CardHeader>
            <CardBody><Question4 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('4') }} disabled={this.state.activateNext}> Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao5 ?
          <Card>
            <CardHeader> <b>(5)</b> : Qual o nome da placa R-25-b? <img src={r25b} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question5 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('5') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao6 ?
          <Card>
            <CardHeader> <b>(6)</b> : São órgão de controle ambiental:</CardHeader>
            <CardBody><Question6 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('6') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao7 ?
          <Card>
            <CardHeader> <b>(7)</b> : Para acionar o socorro especializado, ou seja, serviço de Atendimento Móvel de Urgência - SAMU devemos ligar para o telefone :</CardHeader>
            <CardBody><Question7 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('7') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao8 ?
          <Card>
            <CardHeader> <b>(8)</b> : Congestionamentos, desvios e veículos parados na pista de rolamento, são exemplos de condições adversas de: </CardHeader>
            <CardBody><Question8 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('8') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao9 ?
          <Card>
            <CardHeader> <b>(9)</b> : Quanto ao uso de torniquete, podemos afirmar que: :</CardHeader>
            <CardBody><Question9 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('9') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao10 ?
          <Card>
            <CardHeader> <b>(10)</b> : O proprietário de veículo irrecuperável deverá requerer a baixa do veículo: </CardHeader>
            <CardBody><Question10 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('10') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}



        {this.state.questao11 ?
          <Card>
            <CardHeader> <b>(11)</b> : Assinale a alternativa que não configura infração de trânsito:</CardHeader>
            <CardBody><Question11 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('11') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao12 ?
          <Card>
            <CardHeader> <b>(12)</b> : Qual o nome técnico da placa A-4b ?<img src={a4b} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question12 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('12') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao13 ?
          <Card>
            <CardHeader> <b>(13)</b> : Tem por finalidade alertar os usuários da via para condições potencialmente perigosas, indicando sua natureza, cuja mensagem possui carácter de recomendação: </CardHeader>
            <CardBody><Question13 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('13') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao14 ?
          <Card>
            <CardHeader> <b>(14)</b> : A substância que é produzida pelos motores de veículos, sendo liberada na atmosfera pelo escapamento, e que tem ação tóxica sobre o organismo humano é o:</CardHeader>
            <CardBody><Question14 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('14') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao15 ?
          <Card>
            <CardHeader> <b>(15)</b> : Quais são os fatores que provocam a hidroplanagem : </CardHeader>
            <CardBody><Question15 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('15') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao16 ?
          <Card>
            <CardHeader> <b>(16)</b> : Qual a distância recomendada para iniciar a sinalização, em uma rua com velocidade máxima permitida de 40 quilômetros por hora, em caso de acidente?</CardHeader>
            <CardBody><Question16 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('16') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao17 ?
          <Card>
            <CardHeader> <b>(17)</b> : Levando em consideração o combustível de um motor, que se inflama no ar admitido após este ter sido altamente aquecido, podemos chamar este motor de:</CardHeader>
            <CardBody><Question17 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('17') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao18 ?
          <Card>
            <CardHeader> <b>(18)</b> : De acordo com a legislação de trânsito em vigor, o tempo da parada do veículo deve ser : </CardHeader>
            <CardBody><Question18 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('18') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao19 ?
          <Card>
            <CardHeader> <b>(19)</b> : Direção defensiva é</CardHeader>
            <CardBody><Question19 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('19') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao20 ?
          <Card>
            <CardHeader> <b>(20)</b> : O documento preenchido pelo agente de trânsito, ao constatar e registrar uma infração de trânsito denomina-se: </CardHeader>
            <CardBody><Question20 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('20') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}

        {this.state.questao21 ?
          <Card>
            <CardHeader> <b>(21)</b> : A peça que é parafusada na parte superior do bloco do motor, chama-se: </CardHeader>
            <CardBody><Question21 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('21') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao22 ?
          <Card>
            <CardHeader> <b>(22)</b> : Atirar lixo (papel, plástico, lata, etc.) de dentro do veículo, nas vias públicas, com relação à legislação de trânsito constitui:</CardHeader>
            <CardBody><Question22 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('22') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao23 ?
          <Card>
            <CardHeader> <b>(23)</b> : Além de orientar os condutores e pedestres para obedecerem às Leis de trânsito, o agente de trânsito deve ainda:</CardHeader>
            <CardBody><Question23 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('23') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao24 ?
          <Card>
            <CardHeader> <b>(24)</b> : De acordo com as regras de trânsito, deve o condutor do veículo:</CardHeader>
            <CardBody><Question24 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('24') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao25 ?
          <Card>
            <CardHeader> <b>(25)</b> : Para evitar os riscos causados pelo ofuscamento devido à inclinação da luz solar é adequado ao condutor do veículo: </CardHeader>
            <CardBody><Question25 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('25') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao26 ?
          <Card>
            <CardHeader> <b>(26)</b> : Qual o nome técnico da placa S-9 ?<img src={s9} width="120px" height="120px" align="right" /></CardHeader>
            <CardBody><Question26 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('26') }} disabled={this.state.activateNext}> Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao27 ?
          <Card>
            <CardHeader> <b>(27)</b> : O condutor ao transitar em pavimento com presença de óleo, barro, areia ou água na pista, tornando-o escorregadio, deve: </CardHeader>
            <CardBody><Question27 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('27') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao28 ?
          <Card>
            <CardHeader> <b>(28)</b> : Em caso de amputação, devemos:  </CardHeader>
            <CardBody><Question28 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('28') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao29 ?
          <Card>
            <CardHeader> <b>(29)</b> : Para trafegar com margem de segurança, a atitude correta do condutor depende de :</CardHeader>
            <CardBody><Question29 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('29') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao30 ?
          <Card>
            <CardHeader> <b>(30)</b> : É incorreto afirmar que: </CardHeader>
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
                <h3>Questões erradas:</h3>
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
