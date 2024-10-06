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

  searchMovies(title: string, year?: string, genre?: string, language?: string): Observable<any> {
    let query = `${this.baseUrl}?s=${title}&apikey=${this.apiKey}`;

    if (year) {
      query += `&y=${year}`;
    }
    if (genre) {
      query += `&genre=${genre}`;
    }
    if (language) {
      query += `&language=${language}`;
    }

    return this.http.get(query);
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?i=${id}&apikey=${this.apiKey}`);
  }
}

