import { Component, OnInit } from '@angular/core';
import { ConsomeApiService } from 'src/app/services/consome-api.service';

@Component({
  selector: 'app-exercicio10',
  templateUrl: './exercicio10.component.html',
  styleUrls: ['./exercicio10.component.scss']
})
export class Exercicio10Component implements OnInit {
  popularMovie: any;
  loading:boolean = true
  top3 = [];
  movieIndex = 0;

  constructor(private getMovies: ConsomeApiService) { }

  ngOnInit(): void {
    this.getPopular()
  }

  async getPopular(){
    const data = await this.getMovies.popularMovies();

    this.top3 = data.results.slice(0,3)
    this.popularMovie = this.top3[0]
    console.log(this.top3)
    this.loading = false
  }

  previousMovie(){
   if(this.movieIndex == 0){
     this.movieIndex = 1
    }
    else if(this.movieIndex == 1){
      this.movieIndex = 2
    }else{
      this.movieIndex = 0
    }

    this.popularMovie = this.top3[this.movieIndex]
  }

 nextMovie(){
    if(this.movieIndex == 2){
      this.movieIndex = 1
    }else if(this.movieIndex == 1){
      this.movieIndex = 0
    }
    this.popularMovie = this.top3[this.movieIndex]
  }

}
