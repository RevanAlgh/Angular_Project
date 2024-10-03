import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Array<{ Source: string; Value: string }>;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'http://www.omdbapi.com/?apikey=f5b1b719';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.apiUrl}&s=${title}`);
  }

  getMovieDetails(id: string): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.apiUrl}&i=${id}`);
  }
}
