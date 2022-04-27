import { Component, OnInit } from '@angular/core';
import { CalcService } from 'src/app/services/calc.service';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.scss']
})
export class Exercicio3Component {
  value1!:number ;
  value2!:number;
  operator!:string;
  result!:number

  constructor(public calc: CalcService) { }

  somar(value1:number, value2:number){
    this.result = this.calc.soma(value1, value2)
  }

  subt(value1:number, value2:number){
    this.result = this.calc.sub(value1, value2)
  }

  mult(value1:number, value2:number){
    this.result = this.calc.multi(value1, value2)
  }

  divi(value1:number, value2:number){
    this.result = this.calc.divi(value1, value2)
  }

}
