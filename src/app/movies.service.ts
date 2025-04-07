import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private allMovies = [
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



    {
      title:'David Blaine Do Not Attempt',
      img: 'https://ww8.cuevana3.to/poster/david-blaine-do-not-attempt-thumb.jpg',
      link:'https://ww8.cuevana3.to/serie/david-blaine-do-not-attempt'
    },
    {
      title:'Celtics City',
      img: 'https://ww8.cuevana3.to/poster/celtics-city-thumb.jpg',
      link:'https://ww8.cuevana3.to/serie/celtics-city'
    },
    {
      title:'Real Madrid: Cómo no te voy a querer',
      img: 'https://ww8.cuevana3.to/poster/real-madrid-como-no-te-voy-a-querer-thumb.jpg',
      link:'https://ww8.cuevana3.to/serie/real-madrid-como-no-te-voy-a-querer'
    },
    {
      title:'¿Quién es Luigi Mangione?',
      img: 'https://ww8.cuevana3.to/poster/quien-es-luigi-mangione-thumb.jpg',
      link:'https://ww8.cuevana3.to/20676/quien-es-luigi-mangione'
    },
    {
      title:'Becoming Led Zeppelin: Los inicios',
      img: 'https://th.bing.com/th/id/OIP.99HIsFVwALzvwaepdjseoQHaK-?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/20673/becoming-led-zeppelin-los-inicios'
    },
    {
      title:'American Murder: Gabby Petito',
      img: 'https://th.bing.com/th/id/OIP.kU9iPrT9Sqapngo_EvrfKAHaKk?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/serie/american-murder-gabby-petito'
    },
    {
      title:'Cómo sobrevivimos a la caída de los Black Hawk',
      img: 'https://th.bing.com/th/id/OIP.YIvIoubhw_1QRPqIcPMEXQHaLH?rs=1&pid=ImgDetMain',
      link:'https://www.bing.com/videos/riverview/relatedvideo?q=como+sobrevivimos+a+la+caida+de+los+black+hawk+cuevana&&view=riverview&mmscn=mtsc&mid=30D3EA32D9C6DEF4C8A730D3EA32D9C6DEF4C8A7&&aps=635&mcid=371B238D5E924DD8AF4D6FE2ECC22C8F&FORM=VMSOVR'
    },
    {
      title:'Avicii: Mi último show',
      img: 'https://pics.filmaffinity.com/avicii_my_last_show-305683496-large.jpg',
      link:'https://ww8.cuevana3.to/20555/avicii-mi-ultimo-show'
    },
    {
      title:'No te mueras: El hombre que quiere vivir para siempre',
      img: 'https://pics.filmaffinity.com/don_t_die_the_man_who_wants_to_live_forever-613833724-mmed.jpg',
      link:'https://ww8.cuevana3.to/20482/no-te-mueras-el-hombre-que-quiere-vivir-para-siempre'
    },
    {
      title:'Look Into My Eyes',
      img: 'https://ww8.cuevana3.to/poster/look-into-my-eyes-thumb.jpg',
      link:'https://ww8.cuevana3.to/20456/look-into-my-eyes'
    },
    {
      title:'La caída de Diddy',
      img: 'https://th.bing.com/th/id/OIP.pI7Ayv_CTHTnLkF7JpmsmwHaKk?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/serie/la-caida-de-diddy'
    },
    {
      title:'Canario Negro',
      img: 'https://th.bing.com/th/id/OIP.TUBXZ1RufvjI0P-buj8S0gHaKk?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/20189/canary-black'
    },
    {
      title:'Vince McMahon: El titán de la WWE',
      img: 'https://ww8.cuevana3.to/poster/vince-mcmahon-el-titan-de-la-wwe-thumb.jpg',
      link:'https://ww8.cuevana3.to/serie/vince-mcmahon-el-titan-de-la-wwe'
    },
    {
      title:'Bob Ross: Accidentes felices, traiciones y avaricia',
      img: 'https://ww8.cuevana3.to/poster/bob-ross-accidentes-felices-traiciones-y-avaricia-thumb.jpg',
      link:'https://ww8.cuevana3.to/19535/bob-ross-accidentes-felices-traiciones-y-avaricia'
    },
    {
      title:'Las mujeres y el asesino',
      img: 'https://th.bing.com/th/id/OIP.2ek95s-Sl50eKybduJViWgHaLG?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/19523/las-mujeres-y-el-asesino'
    },






    {
      title:'Sing Sing',
      img:'https://ww8.cuevana3.to/poster/sing-sing-thumb.jpg',
      link:'https://ww8.cuevana3.to/20904/sing-sing'
    },
    {
      title:'Tú no eres yo',
      img:'https://ww8.cuevana3.to/poster/tu-no-eres-yo-thumb.jpg',
      link:'https://ww8.cuevana3.to/20901/tu-no-eres-yo'
    },
    {
      title:'En un confín del mundo',
      img:'https://ww8.cuevana3.to/poster/en-un-confin-del-mundo-thumb.jpg',
      link:'https://ww8.cuevana3.to/20895/en-un-confin-del-mundo'
    },
    {
      title:'Tierra de Mafia',
      img:'https://ww8.cuevana3.to/poster/tierra-de-mafia-thumb.jpg',
      link:'https://ww8.cuevana3.to/serie/tierra-de-mafia'
    },
    {
      title:'Petites',
      img:'https://ww8.cuevana3.to/poster/petites-thumb.jpg',
      link:'https://ww8.cuevana3.to/20893/petites'
    },
    {
      title:'Aún estoy aquí',
      img:'https://ww8.cuevana3.to/poster/aun-estoy-aqui-thumb.jpg',
      link:'https://ww8.cuevana3.to/20892/aun-estoy-aqui'
    },
    {
      title:'When Im Ready',
      img:'https://ww8.cuevana3.to/poster/when-im-ready-thumb.jpg',
      link:'https://ww8.cuevana3.to/20890/when-im-ready'
    },
    {
      title:'Who Killed Angel Adams?',
      img:'https://ww8.cuevana3.to/poster/who-killed-angel-adams-thumb.jpg',
      link:'https://ww8.cuevana3.to/20889/who-killed-angel-adams'
    },
    {
      title:'Wrong Address',
      img:'https://ww8.cuevana3.to/poster/wrong-address-thumb.jpg',
      link:'https://ww8.cuevana3.to/20886/wrong-address'
    },
    {
      title:'Manual para señoritas',
      img:'https://ww8.cuevana3.to/poster/manual-para-senoritas-thumb.jpg',
      link:'https://ww8.cuevana3.to/serie/manual-para-senoritas'
    },
    {
      title:'Los últimos románticos',
      img:'https://ww8.cuevana3.to/poster/los-ultimos-romanticos-thumb.jpg',
      link:'https://ww8.cuevana3.to/20878/los-ultimos-romanticos'
    },
    {
      title:'Eternal',
      img:'https://ww8.cuevana3.to/poster/eternal-thumb.jpg',
      link:'https://ww8.cuevana3.to/20875/eternal'
    },
    {
      title:'Las chicas de la estación',
      img:'https://ww8.cuevana3.to/poster/las-chicas-de-la-estacion-thumb.jpg',
      link:'https://ww8.cuevana3.to/20871/las-chicas-de-la-estacion'
    },
    {
      title:'Family Affair',
      img:'https://ww8.cuevana3.to/poster/family-affair-thumb.jpg',
      link:'https://ww8.cuevana3.to/20857/family-affair'
    },
    {
      title:'La clave del problema',
      img:'https://ww8.cuevana3.to/poster/the-locksmith-thumb.jpg',
      link:'https://ww8.cuevana3.to/20853/the-locksmith'
    },




    {
      title:'Blancanieves',
      img:'https://image.tmdb.org/t/p/w300/uxy6FIFl3hccD2eqGe75WkPLv5M.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117311/blancanieves-online-gratis-en-cuevana'
    },
    {
      title:'La acompañante',
      img:'https://image.tmdb.org/t/p/w300/dZR98C2Tzefugivw21yEfYvp1G9.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117291/la-acompanante-2-online-gratis-en-cuevana'
    },
    {
      title:'The Monkey',
      img:'https://image.tmdb.org/t/p/w300/eEhZyX9s15RRjDZ358GNNQRBMWs.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117288/the-monkey-online-gratis-en-cuevana'
    },
    {
      title:'Fight or Flight',
      img:'https://image.tmdb.org/t/p/w300/x4nWnfgJvL045rcUCSJzfgIIY9i.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117280/fight-or-flight-online-gratis-en-cuevana'
    },
    {
      title:'Talons of the Phoenix',
      img:'https://image.tmdb.org/t/p/w300/mwsFxVD4DtQ7GWl93YWjQNQhM1R.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117262/talons-of-the-phoenix-online-gratis-en-cuevana'
    },
    {
      title:'Into the Deep',
      img:'https://image.tmdb.org/t/p/w300/tHkFVhZji6o9UyHXezAeFma8IOW.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117261/into-the-deep-online-gratis-en-cuevana'
    },
    {
      title:'Blood Pay',
      img:'https://image.tmdb.org/t/p/w300/ko6sIgAyCXI43Zx50R02adv8BLt.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117256/blood-pay-online-gratis-en-cuevana'
    },
    {
      title:'I Love You Forever',
      img:'https://image.tmdb.org/t/p/w300/nB4EQzbOgEBeC4uzbnGxM2cikzE.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117112/i-love-you-forever-online-gratis-en-cuevana'
    },
    {
      title:'Bone Face',
      img:'https://image.tmdb.org/t/p/w300/e4aTDL3h40zkK3FpGgh8wPlj1F7.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117107/bone-face-online-gratis-en-cuevana'
    },
    {
      title:'La Ultima Parada de Arizona',
      img:'https://image.tmdb.org/t/p/w300/aGv2wLO3vZacOCm73kEOY8uRQIC.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/117332/la-ultima-parada-de-arizona-online-gratis-en-cuevana'
    },
    {
      title:'Madame Web',
      img:'https://image.tmdb.org/t/p/w300/4gCwRJWKG7PnEVtCxgKymF9kKxO.jpg',
      link:'https://wow.cuevana3.nu/peliculas-online/92414/madame-web-online-gratis-en-cuevana/'
    },
    {
      title:'Sin oxígeno',
      img:'https://image.tmdb.org/t/p/w300/w04Xg5Bnqj7ECdCxTsHgqK6AtJW.jpg',
      link:'https://amd-cdn-1.ffb7df5a878b59e42e257c042f54bed2.com/content/stream/agl/pinup_preroll_coin_volcano_dinero.mp4'
    },
    {
      title:'Mickey 17',
      img:'https://image.tmdb.org/t/p/w300/ou9BobDOvNbkFYBTlpa7x8pND4i.jpg',
      link:'https://amd-cdn-1.ffb7df5a878b59e42e257c042f54bed2.com/content/stream/agl/pinup_preroll_fortune_double_mx_dinero.mp4'
    },
    {
      title:'Por el mal camino',
      img:'https://image.tmdb.org/t/p/w300/mNCVMaK3UMR6yyAoH0YnOSwlZTd.jpg',
      link:'https://amd-cdn-1.ffb7df5a878b59e42e257c042f54bed2.com/content/stream/agl/pinup_preroll_fortune_double_mx_dinero.mp4'
    },
    {
      title:'Ciudad de los demonios',
      img:'https://image.tmdb.org/t/p/w300/cU6InMc8NYc54Ok4NnNHdjipqCQ.jpg',
      link:'https://amd-cdn-1.ffb7df5a878b59e42e257c042f54bed2.com/content/stream/agl/pinup_preroll_coin_volcano_dinero.mp4S'
    },






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




    {
      title:'En attendant la nuit',
      img: 'https://ww8.cuevana3.to/poster/en-attendant-la-nuit-thumb.jpg',
      link:'https://ww8.cuevana3.to/20858/en-attendant-la-nuit'
    },
    {
      title:'Escapada de espanto',
      img: 'https://th.bing.com/th/id/OIP.eXyg2c2TI8fZcQ5Cp4emLgHaLS?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/20848/escapada-de-espanto'
    },
    {
      title:'Operation Undead',
      img: 'https://th.bing.com/th/id/OIP.rVgP_raSMn1q2H0r1plMLQHaLH?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/20839/operation-undead'
    },
    {
      title:'Skinjacker',
      img: 'https://th.bing.com/th/id/OIP.7_btlSHFkUDeYGemxfpZ_wAAAA?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/20827/skinjacker'
    },
    {
      title:'Slaughter Beach',
      img: 'https://th.bing.com/th/id/OIP.BzQiz7qCkv_URTTXzkQrmAHaK9?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/20826/slaughter-beach'
    },
    {
      title:'The Blare Rabbit Project',
      img: 'https://ww8.cuevana3.to/poster/the-blare-rabbit-project-thumb.jpg',
      link:'https://ww8.cuevana3.to/20823/the-blare-rabbit-project'
    },
    {
      title:'Dont Make a Sound',
      img: 'https://th.bing.com/th/id/OIP.CE--cimKe2WzzRh_8KZmIwHaKf?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/20807/dont-make-a-sound'
    },
    {
      title:'Fright',
      img: 'https://m.media-amazon.com/images/M/MV5BYjcyNDk5NzQtMTA1OC00ZDE2LWJiOWUtMDdiYmQzYWIzM2YwXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_FMjpg_UX1000_.jpg',
      link:'https://ww8.cuevana3.to/20802/fright'
    },
    {
      title:'Finger Licking',
      img: 'https://th.bing.com/th/id/OIP.6LvLUtl9K0fMbHrMBCg1CAHaKe?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/20790/finger-licking'
    },
    {
      title:'Piglet',
      img: 'https://media.themoviedb.org/t/p/w500/5wZNFUJAwyX6RCxdqrLO9lLWJ20.jpg',
      link:'https://ww8.cuevana3.to/20740/piglet'
    },
    {
      title:'Presencia',
      img: 'https://ww8.cuevana3.to/poster/presencia-thumb.jpg',
      link:'https://ww8.cuevana3.to/20736/presencia'
    },
    {
      title:'Heart Eyes',
      img: 'https://th.bing.com/th/id/OIP.BmtTfFXWtibjNmzU1SWrMQHaK3?rs=1&pid=ImgDetMain',
      link:'https://ww8.cuevana3.to/20735/heart-eyes'
    },
    {
      title:'Weekend Deadaway',
      img: 'https://m.media-amazon.com/images/M/MV5BNGEwM2NlMzUtMWM3Ni00ZTQ3LTlhMzUtMDEzMWMxYjk1ZGI4XkEyXkFqcGdeQXVyNjQyMzcxNzg@._V1_.jpg',
      link:'https://ww8.cuevana3.to/20729/weekend-deadaway'
    },
    {
      title:'El mono',
      img: 'https://ww8.cuevana3.to/poster/el-mono-thumb.jpg',
      link:'https://ww8.cuevana3.to/20638/el-mono'
    },
    {
      title:'Rerouting',
      img: 'https://ww8.cuevana3.to/poster/rerouting-thumb.jpg',
      link:'https://ww8.cuevana3.to/20716/rerouting'
    },
  ];


  getMovies(){
    return this.allMovies;
  }


  searchMovies(query: string){
    const lowerQuery = query.toLowerCase();
    return this.allMovies.filter(movie => movie.title.toLowerCase().includes(lowerQuery));
  }

  /*getByGenre(genre: string){
    return this.allMovies.filter(movie => movie.genre === genre);
  }*/

  constructor() { }
}
