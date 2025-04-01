import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { GridComponent } from './grid/grid.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CarouselComponent } from './carousel/carousel.component';
import { register } from 'swiper/element/bundle';
import { GridpeliComponent } from './gridpeli/gridpeli.component';
import { GridseriesComponent } from './gridseries/gridseries.component';
import { GriddocComponent } from './griddoc/griddoc.component';
import { GridterrorComponent } from './gridterror/gridterror.component';
import { GriddramaComponent } from './griddrama/griddrama.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GridComponent,
    CarouselComponent,
    GridpeliComponent,
    GridseriesComponent,
    GriddocComponent,
    GridterrorComponent,
    GriddramaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
