import { Component, Input } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-allmovies',
  standalone: false,
  templateUrl: './allmovies.component.html',
  styleUrl: './allmovies.component.css'
})
export class AllmoviesComponent {
  
  @Input() movies: any[] = [];

}
