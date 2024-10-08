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

  genres: string[] = [
    'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 
    'Romance', 'Thriller', 'Western', 'Sci-Fi', 'Adventure', 'Animation', 
    'Biography', 'Documentary', 'Musical'
  ];

  languages: string[] = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Japanese', 
    'Korean', 'Mandarin', 'Hindi', 'Russian'
  ];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    this.movieService.searchMovies(this.title, this.year, this.genre, this.language)
      .then((response: any) => {
        if (response.Search) {
          this.movies = response.Search;
        } else {
          this.error = 'No movies found';
        }
      })
      .catch((error: any) => {
        this.error = 'Error fetching movies';
        console.error(error);
      });
  }
}