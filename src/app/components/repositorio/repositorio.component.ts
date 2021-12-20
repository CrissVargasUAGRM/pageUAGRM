import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  public semestres: any[] = [
    {
      semestre: "Primer Sem."
    },
    {
      semestre: "Segundo Sem."
    },
    {
      semestre: "Tercer Sem."
    },
    {
      semestre: "Cuarto Sem."
    },
    {
      semestre: "Quinto Sem."
    },
    {
      semestre: "Sexto Sem."
    },
    {
      semestre: "Septimo Sem."
    },
    {
      semestre: "Octavo Sem."
    },
    {
      semestre: "Noveno Sem."
    },
    {
      semestre: "Materias Electivas"
    },
  {
    semestre: "Tercer Sem."
  },
  {
    semestre: "Cuarto Sem."
  },
  {
    semestre: "Quinto Sem."
  },
  {
    semestre: "Sexto Sem."
  },
  {
    semestre: "Septimo Sem."
  },
  {
    semestre: "Octavo Sem."
  },
  {
    semestre: "Noveno Sem."
  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
