import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  searchTitle = '';
  movies: any[] = [];
  selectedMovie: any;

  constructor(private movieService: MovieService) {}

  searchMovies() {
    this.movieService.searchMovies(this.searchTitle).subscribe((data: any) => {
      this.movies = data.Search;
    });
  }

  selectMovie(movie: any) {
    this.selectedMovie = movie;
  }
}
