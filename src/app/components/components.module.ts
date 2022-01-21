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
import { CarrerahistComponent } from './carrerahist/carrerahist.component';
import { MisionvisionComponent } from './misionvision/misionvision.component';
import { MallaComponent } from './malla/malla.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { RepositorioComponent } from './repositorio/repositorio.component';
import { MateriasComponent } from './materias/materias.component';

import { NgxOrgChartModule } from 'ngx-org-chart'; 

@NgModule({
  declarations: [
    CarruselComponent,
    NoticiasComponent,
    PregfrecComponent,
    FacultadComponent,
    FacultamisvisComponent,
    ConsejoComponent,
    DocenteComponent,
    CarrerahistComponent,
    MisionvisionComponent,
    MallaComponent,
    BibliotecaComponent,
    RepositorioComponent,
    MateriasComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    NgxOrgChartModule
  ],
  exports: [
    CarruselComponent,
    NoticiasComponent,
    PregfrecComponent,
    FacultadComponent,
    FacultamisvisComponent,
    ConsejoComponent,
    DocenteComponent,
    CarrerahistComponent,
    MisionvisionComponent,
    MallaComponent,
    BibliotecaComponent,
    RepositorioComponent,
    MateriasComponent
  ]
})
export class ComponentsModule { }
