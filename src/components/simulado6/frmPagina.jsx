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

import r38 from '../imagens/R-38.png'; 
import a48 from '../imagens/A-48.png'; 
import s2 from '../imagens/S-2.png'; 

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
      id: 1,  
      resposta: [
        { resp: 'A', questao: '1'},
        { resp: 'C', questao: '2'},
        { resp: 'D', questao: '3'},
        { resp: 'C', questao: '4'},
        { resp: 'C', questao: '5'},
        { resp: 'C', questao: '6'}, 
        { resp: 'B', questao: '7'}, 
        { resp: 'A', questao: '8'}, 
        { resp: 'B', questao: '9'}, 
        { resp: 'D', questao: '10'}, 
        { resp: 'D', questao: '11'},
        { resp: 'B', questao: '12'},
        { resp: 'D', questao: '13'},
        { resp: 'A', questao: '14'},
        { resp: 'B', questao: '15'},
        { resp: 'C', questao: '16'},
        { resp: 'B', questao: '17'},
        { resp: 'C', questao: '18'},
        { resp: 'B', questao: '19'},
        { resp: 'C', questao: '20'},
        { resp: 'B', questao: '21'},
        { resp: 'B', questao: '22'},
        { resp: 'C', questao: '23'},
        { resp: 'D', questao: '24'},
        { resp: 'D', questao: '25'},
        { resp: 'D', questao: '26'},
        { resp: 'B', questao: '27'},
        { resp: 'A', questao: '28'},
        { resp: 'D', questao: '29'},
        { resp: 'C', questao: '30'},
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
    console.log(question )
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
        Errors.push("Questão : " + i + "  = " + this.state.resposta[i].resp);
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
            <CardHeader> <b>(1)</b> : Os motoristas, após 65 (sessenta e cinco) anos de idade, ao renovarem sua CNH deverão ser submetidos aos exames médicos(sanidade física e mental) nos seguintes períodicos :</CardHeader>
            <CardBody><Question1 alternativa={this._selectQuestion} habilitar={this._openNext}/> </CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('1')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao2 ?
          <Card>
            <CardHeader> <b>(2)</b> : O condutor ao aproximar de um cruzamento com semáforo, e a indicação luminosa for vermelha, deverá :</CardHeader>
            <CardBody><Question2 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('2') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao3 ?
          <Card>
            <CardHeader> <b>(3)</b> : Os órgão técnicos que têm por finalidade estudar e oferecer sugestões e embasamento, vinculados ao CONTRAN, denominam-se :</CardHeader>
            <CardBody><Question3 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('3') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao4 ?
          <Card>
            <CardHeader> <b>(4)</b> : Qual o nome técnico da placa R-38? <img src={r38}  width="120px" height="120px" align="right"/> :</CardHeader>
            <CardBody><Question4 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('4') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao5 ?
          <Card>
            <CardHeader> <b>(5)</b> : Quando uma vitima de incêndio apresenta formação de bolhas decorrentes de queimaduras de segundo grau, qual o procedimento preliminar mais adequado ?</CardHeader>
            <CardBody><Question5 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('5') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao6 ?
          <Card>
            <CardHeader> <b>(6)</b> :  Qual o nome técnico da placa A-48? <img src={a48}  width="120px" height="120px" align="right"/>:</CardHeader>
            <CardBody><Question6 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('6') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao7 ?
          <Card>
            <CardHeader> <b>(7)</b> : É dever de todo condutor de veículo, ao efetuar uma ultrapassagem :</CardHeader>
            <CardBody><Question7 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('7') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao8 ?
          <Card>
            <CardHeader> <b>(8)</b> : A pontuação de uma infração de natureza leve é: </CardHeader>
            <CardBody><Question8 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('8') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao9 ?
          <Card>
            <CardHeader> <b>(9)</b> : Para evitar a colisão com o veículo que vai à frente, o motorista deverá :</CardHeader>
            <CardBody><Question9 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('9') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao10 ?
          <Card>
            <CardHeader> <b>(10)</b> : A soma das infrações gravíssima, grave, média e leve, totaliza : </CardHeader>
            <CardBody><Question10 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('10') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}



        {this.state.questao11 ?
          <Card>
            <CardHeader> <b>(11)</b> : O recolhimento do cerficado de Registro e Licenciamento de Veículo (CRLV) não poderá ocorrer em qual situação abaixo citada :</CardHeader>
            <CardBody><Question11 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('11') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao12 ?
          <Card>
            <CardHeader> <b>(12)</b> : Qual a velocidade máxima permitida para um automóvel que circula, em uma via de trânsito rápido, sem sinalização :</CardHeader>
            <CardBody><Question12 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('12') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao13 ?
          <Card>
            <CardHeader> <b>(13)</b> : O condutor de veículo que estiver habilitado na categoria "D" poderá dirigir :</CardHeader>
            <CardBody><Question13 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('13') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao14 ?
          <Card>
            <CardHeader> <b>(14)</b> : O que significa o gesto do agente de trânsito, quando ele levanta verticalmente o braço, com o movimento de antebraço da frente para a retaguarda e a palma da mão voltada para trás :</CardHeader>
            <CardBody><Question14 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('14') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao15 ?
          <Card>
            <CardHeader> <b>(15)</b> : Ocorrendo um choque com um poste, onde os cabos elétricos de alta voltagem se romperam e ficaram energizados sobre o veículo. Qual é o procedimento mais seguro a ser adotado pelas pessoas que se encontram no interior deste veículo, considerando que os peneus estejam intactos e não haja risco de vazamento de combustível? </CardHeader>
            <CardBody><Question15 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('15') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao16 ?
          <Card>
            <CardHeader> <b>(16)</b> : Na fiscalização do transporte de produtos que afetam o meio ambiente, a nota fiscal apresentada deve conter :</CardHeader>
            <CardBody><Question16 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('16') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao17 ?
          <Card>
            <CardHeader> <b>(17)</b> : Em hemorragia externa, se o sangue ensopar as primeiras compressas aplicadas, você deverá :</CardHeader>
            <CardBody><Question17 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('17') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao18 ?
          <Card>
            <CardHeader> <b>(18)</b> : Na estrutura do Sistema Nacional de Trânsito são órgãos executivos de trânsito : </CardHeader>
            <CardBody><Question18 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('18') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao19 ?
          <Card>
            <CardHeader> <b>(19)</b> : Qual o nome técnico da placa S-2? <img src={s2}  width="120px" height="120px" align="right"/> :</CardHeader>
            <CardBody><Question19 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('19') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao20 ?
          <Card>
            <CardHeader> <b>(20)</b> : Quando acender a luz do painel que indica bateria, isto significa : </CardHeader>
            <CardBody><Question20 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('20') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}

        {this.state.questao21 ?
          <Card>
            <CardHeader> <b>(21)</b> : Sobre a suspensão do direito de dirigir, aplicada pela autoridade de trânsito é incorreto afirma que : </CardHeader>
            <CardBody><Question21 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('21') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao22 ?
          <Card>
            <CardHeader> <b>(22)</b> : Assinale a alternativa incorreta em relação à utilização de motocicletas e ciclomotores :</CardHeader>
            <CardBody><Question22 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('22') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao23 ?
          <Card>
            <CardHeader> <b>(23)</b> : Resolver os conflitos sobre circunscrição e competência de trânsito no âmbito da União, dos Estados e do Distrito Federal é atribuição do :</CardHeader>
            <CardBody><Question23 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('23') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao24 ?
          <Card>
            <CardHeader> <b>(24)</b> : O equipamento de segurança do veículo, cuja finalidade é limitar a movimentação dos ocupantes deste, em caso de acidentes ou em freadas bruscas é o :</CardHeader>
            <CardBody><Question24 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('24') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao25 ?
          <Card>
            <CardHeader> <b>(25)</b> : Como se informar sobre as condições de temperatura do motor : </CardHeader>
            <CardBody><Question25 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('25') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao26 ?
          <Card>
            <CardHeader> <b>(26)</b> : Segundo o código de trânsito brasileiro, os veículos se classificam :</CardHeader>
            <CardBody><Question26 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('26') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao27 ?
          <Card>
            <CardHeader> <b>(27)</b> : Entendemos a bioética como: </CardHeader>
            <CardBody><Question27 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('27') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao28 ?
          <Card>
            <CardHeader> <b>(28)</b> : O egoísmo, a falta de controle emocioanl e a agressividade são fatores que geram: </CardHeader>
            <CardBody><Question28 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('28') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao29 ?
          <Card>
            <CardHeader> <b>(29)</b> : Qual dos procedimentos abaixo contribui para o aumento da poluição atmosférica:</CardHeader>
            <CardBody><Question29 alternativa={this._selectQuestion} habilitar={this._openNext}/></CardBody>
            <CardFooter><Button onClick={() => { this._alterQuestion('29') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao30 ?
          <Card>
            <CardHeader> <b>(30)</b> : Em caso de acidente com vítima, a sequência correta das ações de socorro, será : </CardHeader>
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
