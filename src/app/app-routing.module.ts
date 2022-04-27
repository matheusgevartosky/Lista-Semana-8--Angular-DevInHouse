import { Exercicio3Component } from './Components/exercicio3/exercicio3.component';
import { Exercicio2Component } from './Components/exercicio2/exercicio2.component';
import { EXE1Component } from './Components/exe1/exe1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path:'exe1', component: EXE1Component
  },
  {
    path:'exercicio2', component: Exercicio2Component
  },
  {
    path: 'exercicio3', component: Exercicio3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
