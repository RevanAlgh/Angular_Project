import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})
export class MovieSearchComponent {
  searchQuery: string = '';
  movies: any[] = [];

  constructor(private movieService: MovieService, private router: Router) {}

  searchMovies() {
    this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
      this.movies = data.Search || [];
    });
  }

  selectMovie(movieId: string) {
    this.router.navigate(['/movies', movieId]);
  }
}
