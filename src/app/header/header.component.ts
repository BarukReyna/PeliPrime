import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchActive = false;

  activarBusqueda(){
    this.searchActive = true;
  }

}
