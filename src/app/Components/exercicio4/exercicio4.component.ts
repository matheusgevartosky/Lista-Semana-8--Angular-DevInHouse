import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.scss']
})
export class Exercicio4Component {

  form: FormGroup = this.fb.group({
    nome!: ['',[Validators.required, Validators.minLength(3) ]],
    email!: ['' ,[Validators.email]],
    nomeFilme: ['', [Validators.required, Validators.minLength(3) ]],
    avaliacao: [null , [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  submit(){

    alert(`Você avaliou o filme ${this.form.value.nomeFilme}` )
  }

}
