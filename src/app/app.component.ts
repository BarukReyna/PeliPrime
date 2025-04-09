import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'PeliPrime';


  searchTerm: string = '';
  filteredMovies: any[]=[];

  showSearchBar: boolean = false;

  toggleSearchBar(): void{
    this.showSearchBar = !this.showSearchBar;
  }

  constructor(private movieService: MoviesService){}
  
  ngOnInit(): void {}

  onSearch(term: string): void{
    this.searchTerm = term;
    if(term.trim() === ''){
      this.filteredMovies = [];
    }else{
      this.filteredMovies = this.movieService.searchMovies(term);
    }
  }
}
