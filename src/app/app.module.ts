import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { EXE1Component } from './Components/exe1/exe1.component';
import { Exercicio2Component } from './Components/exercicio2/exercicio2.component';
import { Exercicio3Component } from './Components/exercicio3/exercicio3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EXE1Component,
    Exercicio2Component,
    Exercicio3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
