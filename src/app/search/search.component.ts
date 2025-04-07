import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() search = new EventEmitter<string>();

  onInputChange(value: string){
    this.search.emit(value);
  }
}
