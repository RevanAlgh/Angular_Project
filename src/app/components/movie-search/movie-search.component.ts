import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  title: string = '';
  year: string = '';
  genre: string = '';
  language: string = '';
  movies: any[] = [];
  error: string = '';

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.title) {
      this.movieService.searchMovies(this.title, this.year, this.genre, this.language).subscribe(
        (response: any) => {
          if (response.Search) {
            this.movies = response.Search;
            this.error = '';
          } else {
            this.movies = [];
            this.error = 'No movies found!';
          }
        },
        (error) => {
          this.movies = [];
          this.error = 'An error occurred while fetching data.';
        }
      );
    } else {
      this.error = 'Please enter a movie title!';
    }
  }
}
