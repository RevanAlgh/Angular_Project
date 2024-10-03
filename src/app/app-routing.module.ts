import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';


const routes: Routes = [
  { path: '', component: TaskListComponent },  
  { path: 'movies', component: MovieSearchComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
