import { Component, OnInit } from '@angular/core';
import { ConsomeApiService } from 'src/app/services/consome-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exercicio5',
  templateUrl: './exercicio5.component.html',
  styleUrls: ['./exercicio5.component.scss']
})
export class Exercicio5Component implements OnInit {

  getResp:any;
  carregado = 0


  constructor(private _http : ConsomeApiService ) { }

  ngOnInit(): void {
    //await this._http.getRequest()
    this.getData()
  }

  async getData(){
    this.getResp = await this._http.getRequest(70);
    console.log(this.getResp)
    this.carregado = 1;
  }

}
