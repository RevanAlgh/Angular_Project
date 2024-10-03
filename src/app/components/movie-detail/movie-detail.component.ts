import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movie: any;
  movieId!: string;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovieDetails(this.movieId).subscribe((data: any) => {
      this.movie = data;
    });
  }

  addToTaskList() {
    if (this.movie) {
      this.taskService.addTask(this.movie.Title);
    }
  }
}
