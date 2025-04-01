import { Component } from '@angular/core';
import { link } from 'fs';
import { title } from 'process';

@Component({
  selector: 'app-grid',
  standalone: false,
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {


  peliculas=[
    {
      title:'1. Código: Traje rojo',
      img:'https://image.tmdb.org/t/p/w300/dpskAcm71w5v8zQ8RmPmJiP31Om.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/111198/codigo-traje-rojo-online-gratis-en-cuevana-1y/'
    },
    {
      title:'2. La Sustancia',
      img:'https://image.tmdb.org/t/p/w300/zQc1PITqFxZDbEmHlQgO5Mxc4Od.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/111042/la-sustancia-online-gratis-en-cuevana-1y/'
    },
    {
      title:'3. Venom: El último baile',
      img:'https://image.tmdb.org/t/p/w300/b0obWWCLRVRqRzlSK1LSGtADkLM.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/111164/venom-el-ultimo-baile-online-gratis-en-cuevana-1y/'
    },
    {
      title:'4. Monster Summer',
      img:'https://image.tmdb.org/t/p/w300/ezTluGxSLLBPMWYWJHGGm96x7RY.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/111148/monster-summer-online-gratis-en-cuevana-1y/'
    },
    {
      title:'5. Robot salvaje',
      img:'https://image.tmdb.org/t/p/w300/oVHb8XMz1RhsopnpDEm4KRRyYT6.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/111077/robot-salvaje-online-gratis-en-cuevana-1y/'
    },
    {
      title:'6. Terrifier 3: Payaso Siniestro',
      img:'https://ww8.cuevana3.to/poster/terrifier-3-payaso-siniestro-thumb.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/111150/terrifier-3-payaso-siniestro-online-gratis-en-cuevana-1y/'
    },
    {
      title:'7. Guasón 2: Folie à Deux',
      img:'https://image.tmdb.org/t/p/w300/tMMYwxrPwVPrxz3DqXs8DnVIOx0.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/111115/guason-2-folie-a-deux-online-gratis-en-cuevana-1y/'
    },
    {
      title:'8. Alien: Romulus',
      img:'https://image.tmdb.org/t/p/w300/8PYqGSd8MOm5ce8io4qNSAiSExW.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/110422/alien-romulus-online-gratis-en-cuevana-1y/'
    },
    {
      title:'9. Gladiador',
      img:'https://image.tmdb.org/t/p/w300/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/94935/gladiador-online-gratis-en-cuevana/'
    },
    {
      title:'10. IntensaMente 2',
      img:'https://image.tmdb.org/t/p/w300/aQnbNiadeGzGSjWLaXyeNxpAUIx.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/110914/intensamente-2-2-online-gratis-en-cuevana/'
    },
  ]

}
