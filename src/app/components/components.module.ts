import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { PregfrecComponent } from './pregfrec/pregfrec.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    CarruselComponent,
    NoticiasComponent,
    PregfrecComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    CarruselComponent,
    NoticiasComponent,
    PregfrecComponent
  ]
})
export class ComponentsModule { }
