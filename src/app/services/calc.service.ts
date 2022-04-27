import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  soma(param1:number, param2:number){
    return param1 + param2
  }

  sub(param1:number, param2:number){
    return param1 - param2
  }

  multi(param1:number, param2:number){
    return param1 * param2
  }

  divi(param1:number, param2:number){
    return param1 / param2
  }

}
