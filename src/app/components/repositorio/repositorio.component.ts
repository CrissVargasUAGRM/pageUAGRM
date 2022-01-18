import { Component, OnInit } from '@angular/core';
import { materiasFac } from '../../constants/materias';
import { Materias } from '../../models/materias';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  public semestres: Materias[] = materiasFac;

  constructor() { }

  ngOnInit(): void {
  }

  goSemestre(id: string){
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  }

}
