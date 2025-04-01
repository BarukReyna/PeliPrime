import { Component } from '@angular/core';

@Component({
  selector: 'app-gridcienciafic',
  standalone: false,
  templateUrl: './gridcienciafic.component.html',
  styleUrl: './gridcienciafic.component.css'
})
export class GridcienciaficComponent {

  peliculas=[
    {
      title:'Tales Beyond The Galaxy',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FgRK7clR2wtHNQndCymOLLjCRAGa.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/1451448/tales-beyond-the-galaxy'
    },
    {
      title:'Capitan America: Brave New World',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fim71UJzBqY03swuGYVR28j0JFM2.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/822119/capitan-america-un-nuevo-mundo'
    },
    {
      title:'Mickey 17',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FfjIHkLGIZdjKIKe252gSFt5QzVK.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/696506/mickey-17'
    },
    {
      title:'Eternal',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FcASxZyI3spiUyMrmEPlNyk7i7YP.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/1053927/eternal'
    },
    {
      title:'When Im Ready',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fg7T2OZVC4G70tmYmUnVzzsbbIYO.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/1013301/when-im-ready'
    },
    {
      title:'El Hombre de Ninguna Parte',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FsVVyZj4t6mYt9imq8yLQclS2yD4.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/1186270/el-hombre-de-ninguna-parte'
    },
    {
      title:'Estado Eléctrico',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FnCuSMDWhWGJAPdp9rSDIogG5X82.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/777443/estado-electrico'
    },
    {
      title:'Mañana Antes Después',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FuQ8Drd3GbNDHQy9eqAxHVbkCRXn.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/898859/manana-antes-despues'
    },
    {
      title:'A Coffin of Stars',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FlzjYLHbjx2bII0bEx6BIcOXhXLQ.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/1221597/a-coffin-of-stars'
    },
    {
      title:'Mars Express',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FaEC0dFieUjpkveilI9GQdTfUFc9.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/586810/mars-express'
    },
    {
      title:'El Final de Nuestros Dias',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FlWw56vQLL33rS3Hq19ECv28dj6a.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/1141182/die-alone'
    },
    {
      title:'The Land That Time Forgot',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Frvi2K2Ab4VNBtGaCKaQHxgsUTtB.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/1423756/the-land-that-time-forgot'
    },
    {
      title:'Henry Danger: La Pelicula',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FdTHEq2PIRAIq4COayxraiGiaajX.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/926670/henry-danger-la-pelicula'
    },
    {
      title:'Star Trek: Sección 31',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Fbx9btF0Jo4rRF68xny7VPqHNt3z.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/1114894/star-trek-seccion-31'
    },
    {
      title:'Replicator',
      img:'https://cuevana.biz/_next/image?url=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2FaesiTVLEkQybmnoR76rEroM1XYL.jpg&w=256&q=75',
      link:'https://cuevana.biz/pelicula/1361740/replicator'
    },
  ]
}
