import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardFooter, Button } from 'reactstrap';

import a from './Placa_Regulamentacao/1.png';
import b from './Placa_Regulamentacao/2.png';
import c from './Placa_Regulamentacao/3.png'; 
import d from './Placa_Regulamentacao/4.png';
import e from './Placa_Regulamentacao/5.png';
import f from './Placa_Regulamentacao/6.png';

var selectList = [];
var numberSelect = "";

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

  render() {
    return (
      <div>
        {this.state.questao1 ? 
          <Card>
            <CardHeader><center><img src={a}  width="230px" height="230px" align="center"/></center></CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('1')}} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao2 ?
          <Card>
            <CardHeader><center><img src={b}  width="230px" height="230px" align="center"/></center></CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('2') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao3 ?
          <Card>
            <CardHeader><center><img src={c}  width="230px" height="230px" align="center"/></center></CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('3') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao4 ?
          <Card>
            <CardHeader><center><img src={d}  width="230px" height="230px" align="center"/></center></CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('4') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao5 ?
          <Card>
            <CardHeader><center><img src={e}  width="230px" height="230px" align="center"/></center></CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('5') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao6 ?
          <Card>
            <CardHeader><center><img src={f}  width="230px" height="230px" align="center"/></center></CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('6') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao7 ?
          <Card>
            <CardHeader> <b>(7)</b> : Quanto às placas de identificação do veículo, podemos afirmar que :</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('7') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao8 ?
          <Card>
            <CardHeader> <b>(8)</b> : O condutor que atirar do veículo ou abandonar na via objetos ou substâncias, estará sujeito a: </CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('8') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao9 ?
          <Card>
            <CardHeader> <b>(9)</b> : O Candidato que for reprovado no exame de legislação de trânsito, ou no exame de direção poderá realizar novo exame após o prazo mínimo de:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('9') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao10 ?
          <Card>
            <CardHeader> <b>(10)</b> : É dever de todo condutor de veículo: </CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('10') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}



        {this.state.questao11 ?
          <Card>
            <CardHeader> <b>(11)</b> : O condutor do veículo para evitar acidentes deve:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('11') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao12 ?
          <Card>
            <CardHeader> <b>(12)</b> : Resolver os conflitos sobre circuscrição e competência de trânsito no âmbito dos municípios é atribuição do:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('12') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao13 ?
          <Card>
            <CardHeader> <b>(13)</b> : Estacionar sobre área de cruzamento, interrrompendo o trânsito da via transversal, acarretará:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('13') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao14 ?
          <Card>
            <CardHeader> <b>(14)</b> : Antes de iniciar qualquer manobra que implique em deslocamento lateral, o condutor deverá:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('14') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao15 ?
          <Card>
            <CardHeader> <b>(15)</b> : Quando o motorista sente cansaço constante ou a atenção diminuída pode estar: </CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('15') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao16 ?
          <Card>
            <CardHeader> <b>(16)</b> :  De acordo com a legislação de trânsito os veículos quanto à tração, classificam-se em:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('16') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao17 ?
          <Card>
            <CardHeader> <b>(17)</b> : Gás sem sabor, sem cheiro e sem cor que é perigoso porque reduz a capacidade de assimilação do oxigênio pelo sangue, e o:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('17') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao18 ?
          <Card>
            <CardHeader> <b>(18)</b> : Podemos considerar como um dos métodos para contenção de hemorragia externa: </CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('18') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao19 ?
          <Card>
            <CardHeader> <b>(19)</b> :Em uma viagem, o condutor defensivo deve adotar os seguintes procedimentos defensivos:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('19') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}
        {this.state.questao20 ?
          <Card>
            <CardHeader> <b>(20)</b> : Qual o nome técnico da placa s-3: <img src={s3} width="120px" height="120px" align="right"/></CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('20') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
        : null}

        {this.state.questao21 ?
          <Card>
            <CardHeader> <b>(21)</b> : Ao dirigir sob neblina ou cerração, é procedimento correto do condutor: </CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('21') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao22 ?
          <Card>
            <CardHeader> <b>(22)</b> : Quanto às seguintes definições, é correto afirmar:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('22') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao23 ?
          <Card>
            <CardHeader> <b>(23)</b> : A bomba injetora só é utilizada nos veículos:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('23') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao24 ?
          <Card>
            <CardHeader> <b>(24)</b> : Como você deve entender Primeiros socorros:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('24') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao25 ?
          <Card>
            <CardHeader> <b>(25)</b> : Em caso de formação de bolhas decorrentes de queimaduras de 2º grau, o que não podemos fazer: </CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('25') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao26 ?
          <Card>
            <CardHeader> <b>(26)</b> : As linhas divisoras de fluxos seccionadas de cor branca significam:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('26') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao27 ?
          <Card>
            <CardHeader> <b>(27)</b> : Ao utilizar o extintor de incêndio de um veículo, não se deve: </CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('27') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao28 ?
          <Card>
            <CardHeader> <b>(28)</b> : O condutor de veículo que se preocupa em avisar o outro que está rodando com o pneu vazio, ou com a porta semiaberta está: </CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('28') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao29 ?
          <Card>
            <CardHeader> <b>(29)</b> : Não se enquadra entre os efeitos danosos do excesso de ruídos:</CardHeader>
            <CardFooter><Button onClick={() => { this._alterQuestion('29') }} disabled={this.state.activateNext}>Proxíma</Button></CardFooter>
          </Card>
          : null}
        {this.state.questao30 ?
          <Card>
            <CardHeader> <b>(30)</b> : O óleo lubrificante do motor deve ser: </CardHeader>
            <CardFooter><Button onClick={() => { this._endQuestions() }} disabled={this.state.activateNext}>Finalizar</Button></CardFooter>
          </Card>
        : null}
      </div>
    );
  }
}

export default frmPagina;
