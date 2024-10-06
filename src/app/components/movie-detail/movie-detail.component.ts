import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieDetails(id).subscribe(
        (response: any) => {
          this.movie = response;
        },
        (error) => {
          this.error = 'Error fetching movie details.';
        }
      );
    }
  }

  addToTaskList() {
    if (this.movie) {
      this.taskService.addMovieTask(this.movie.Title);
      alert('Movie added to your task list!');
    }
  }
}