import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'app-gridseries',
  standalone: false,
  templateUrl: './gridseries.component.html',
  styleUrl: './gridseries.component.css'
})
export class GridseriesComponent {

  series=[
    {
      title:'South Park',
      img:'https://images.pluto.tv/series/60c8f213e301960013db44f8/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/60c8f213e301960013db44f8/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b&lang=en'
    },
    {
      title:'Circulo Rojo',
      img:'https://images.pluto.tv/series/617beced5eb49a001ae13df0/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/617beced5eb49a001ae13df0/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b&lang=en'
    },
    {
      title:'El traidor',
      img:'https://images.pluto.tv/series/6751bbcec683af0013c5035a/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/6751bbcec683af0013c5035a/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b&lang=en'
    },
    {
      title:'Habitación 207',
      img:'https://images.pluto.tv/series/67cf1a93f258b1ad93e0c1bb/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/67cf1a93f258b1ad93e0c1bb/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b&lang=en'
    },
    {
      title:'En la Obscuridad',
      img:'https://images.pluto.tv/series/67ceeef81b63ec7ef450a191/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/67ceeef81b63ec7ef450a191/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b&lang=en'
    },
    {
      title:'Brother United',
      img:'https://images.pluto.tv/series/65ce5afbd6d7310013ce4310/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/65ce5afbd6d7310013ce4310/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b&lang=en'
    },
    {
      title:'Guante Blanco',
      img:'https://images.pluto.tv/series/67cef1eaf258b1ad93d116cf/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/67cef1eaf258b1ad93d116cf/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b&lang=en'
    },
    {
      title:'The lost room',
      img:'https://images.pluto.tv/series/650b116e6930bb00136f67a5/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/on-demand/series/650b116e6930bb00136f67a5/details'
    },
    {
      title:'Shameless',
      img:'https://images.pluto.tv/series/609d6d6e0c3a580013e3cbf7/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/609d6d6e0c3a580013e3cbf7/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b'
    },
    {
      title:'Rookie Blue',
      img:'https://images.pluto.tv/series/64b6d050aab4dc00137537ea/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/64b6d050aab4dc00137537ea/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b'
    },
    {
      title:'Cuando Vamos a la Guerra',
      img:'https://images.pluto.tv/series/67ceef061b63ec7ef4526905/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/67ceef061b63ec7ef4526905/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b'
    },
    {
      title:'La Generala',
      img:'https://images.pluto.tv/series/673cc1472678a5001412d568/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/673cc1472678a5001412d568/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b'
    },
    {
      title:'Crossbones',
      img:'https://images.pluto.tv/series/6075f82b8fe583001a4f5ce4/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/6075f82b8fe583001a4f5ce4/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b'
    },
    {
      title:'Cuentos de la Cripta',
      img:'https://images.pluto.tv/series/5e178bbf2db6f44ad61101d6/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/5e178bbf2db6f44ad61101d6/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b'
    },
    {
      title:'All new Popeye',
      img:'https://images.pluto.tv/series/5e6bdbbce2fa10001bed0543/tile.jpg?fill=blur&fit=fill&fm=jpg&auto=&ixlib=react-9.1.5&q=75&w=200&h=200&dpr=1',
      link:'https://pluto.tv/latam/on-demand/series/5e6bdbbce2fa10001bed0543/season/1?msockid=0fa7def6706e6e001d9eca77710d6f1b'
    },
  
  ]
}
