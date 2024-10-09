import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'] // Corrected the styleUrls property
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  error: string = '';
  showSuccessAlert: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Fetch movie details using fetch (Promise-based)
      this.movieService.getMovieDetails(id)
        .then((response: any) => {
          this.movie = response;
        })
        .catch((error) => {
          this.error = 'Error fetching movie details.';
          console.error(error);
        });
    }
  }

  addToTaskList() {
    if (this.movie) {
      this.taskService.addMovieTask(this.movie.Title);
      this.showSuccessAlert = true; // Show success alert
      setTimeout(() => {
        this.showSuccessAlert = false; // Hide alert after 3 seconds
      }, 3000);
    }
  }
}
