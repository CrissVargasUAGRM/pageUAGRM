import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  public semestres: any[] = [
    {
      semestre: "Primer Semestre"
    },
    {
      semestre: "Segundo Semestre"
    },
    {
      semestre: "Tercer Semestre"
    },
    {
      semestre: "Cuarto Semestre"
    },
    {
      semestre: "Quinto Semestre"
    },
    {
      semestre: "Sexto Semestre"
    },
    {
      semestre: "Septimo Semestre"
    },
    {
      semestre: "Octavo Semestre"
    },
    {
      semestre: "Noveno Semestre"
    },
    {
      semestre: "Materias Electivas"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
