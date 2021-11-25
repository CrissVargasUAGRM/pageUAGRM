import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirtspageComponent } from './firtspage/firtspage.component';
import { InginformaticaComponent } from './inginformatica/inginformatica.component';
import { IngredesComponent } from './ingredes/ingredes.component';
import { IngsistemasComponent } from './ingsistemas/ingsistemas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'inicio', component: FirtspageComponent},
      { path: 'ingsistemas', component: IngsistemasComponent},
      { path: 'inginformatica', component: InginformaticaComponent},
      { path: 'ingredes', component: IngredesComponent},
      { path: '**', redirectTo: 'inicio'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
