import { Component, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() toggleSearchBar = new EventEmitter<void>(); 

  toggleSearch(): void{
    this.toggleSearchBar.emit();
  }

  
  

}
