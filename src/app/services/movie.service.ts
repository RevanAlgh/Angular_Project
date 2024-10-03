import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'f5b1b719'; 
  private baseUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?s=${query}&apikey=${this.apiKey}`);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?i=${id}&apikey=${this.apiKey}`);
  }
}

