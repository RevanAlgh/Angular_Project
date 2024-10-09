import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})

export class MovieSearchComponent implements OnInit {
  movieForm!: FormGroup;
  movies: any[] = [];
  error: string = '';

  // Define genres and languages
  genres: string[] = ['Action', 'Adventure', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Animation', 'Fantasy', 'Romance', 'Documentary', 'Mystery', 'Musical', 'Western', 'Biography'];
  languages: string[] = ['English', 'Spanish', 'French', 'German', 'Mandarin', 'Hindi', 'Japanese', 'Russian', 'Italian', 'Korean'];

  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  ngOnInit() {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      year: [''],
      genre: [''],
      language: ['']
    });
  }

  searchMovies() {
    if (this.movieForm.valid) {
      const { title, year, genre, language } = this.movieForm.value;
      this.movieService.searchMovies(title, year, genre, language)
        .then(response => {
          if (response.Search) {
            this.movies = response.Search;
          } else {
            this.error = 'No movies found';
          }
        })
        .catch(error => {
          this.error = 'Error fetching movies';
        });
    }
  }
}