import { Component, OnInit } from '@angular/core';
import { ConsomeApiService } from 'src/app/services/consome-api.service';

@Component({
  selector: 'app-exercicio9',
  templateUrl: './exercicio9.component.html',
  styleUrls: ['./exercicio9.component.scss']
})
export class Exercicio9Component implements OnInit {

  popularMovie: any;
  loading:boolean = true

  constructor(private getMovies: ConsomeApiService) { }

  ngOnInit(): void {
    this.getPopular()
  }

  async getPopular(){
    const data = await this.getMovies.popularMovies();
    console.log(data.results[1])
    this.popularMovie = data.results[6]
    this.loading = false
  }

}
