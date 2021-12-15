import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { FirtspageComponent } from './firtspage/firtspage.component';
import { InginformaticaComponent } from './inginformatica/inginformatica.component';
import { IngsistemasComponent } from './ingsistemas/ingsistemas.component';
import { IngredesComponent } from './ingredes/ingredes.component';
import { SharedModule } from '../shared/shared.module';
import { FacultadpageComponent } from './facultadpage/facultadpage.component';


@NgModule({
  declarations: [
    PagesComponent,
    FirtspageComponent,
    InginformaticaComponent,
    IngsistemasComponent,
    IngredesComponent,
    FacultadpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    ComponentsModule,
    SharedModule
  ],
})
export class PagesModule { }
