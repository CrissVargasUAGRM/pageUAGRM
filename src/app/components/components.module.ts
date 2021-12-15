import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PregfrecComponent } from './pregfrec/pregfrec.component';
import { SwiperModule } from 'swiper/angular';
import { FacultadComponent } from './facultad/facultad.component';
import { FacultamisvisComponent } from './facultamisvis/facultamisvis.component';
import { ConsejoComponent } from './consejo/consejo.component';
import { DocenteComponent } from './docente/docente.component';



@NgModule({
  declarations: [
    CarruselComponent,
    NoticiasComponent,
    PregfrecComponent,
    FacultadComponent,
    FacultamisvisComponent,
    ConsejoComponent,
    DocenteComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    CarruselComponent,
    NoticiasComponent,
    PregfrecComponent,
    FacultadComponent,
    FacultamisvisComponent,
    ConsejoComponent,
    DocenteComponent
  ]
})
export class ComponentsModule { }
