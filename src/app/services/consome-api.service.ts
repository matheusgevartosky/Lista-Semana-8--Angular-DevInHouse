import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsomeApiService {

  private url = 'https://api.themoviedb.org/3/movie/550?api_key=a7c1529a4462a3519bd9adf6a0b97a07'
  //https://api.themoviedb.org/3/movie/popular?api_key=a7c1529a4462a3519bd9adf6a0b97a07&language=en-US&page=1

  constructor(private _http: HttpClient) { }

  public getRequest(codigoFilme: any){
    return new Promise<any>((resolve) => {
      //this._http.get('https://api.themoviedb.org/3/movie/550?api_key=a7c1529a4462a3519bd9adf6a0b97a07')
      this._http.get(`${environment.filmesAPI}/${codigoFilme}?api_key=${environment.apiKey}`)
      .subscribe(data => {
        resolve(data)
      })
    })
  }

  public popularMovies(){
    return new Promise<any>((resolve) => {
      this._http.get(`${environment.filmesAPI}/popular?api_key=${environment.apiKey}&language=en-US&page=1`)
      .subscribe(data => {
        resolve(data)
      })
    })
  }



}
