import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { EXE1Component } from './Components/exe1/exe1.component';
import { Exercicio2Component } from './Components/exercicio2/exercicio2.component';
import { Exercicio3Component } from './Components/exercicio3/exercicio3.component';
import { Exercicio4Component } from './Components/exercicio4/exercicio4.component';
import { Exercicio5Component } from './Components/exercicio5/exercicio5.component';
import { ConsomeApiService } from './services/consome-api.service';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EXE1Component,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ConsomeApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
