import { Component, Input, OnInit } from '@angular/core';
import { Materias } from '../../models/materias';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  /* JSON CONTENIENDO A LAS MATERIAS */
  @Input() materias: Materias[] = []

  public claseSubMenu: string = "submenu none";
 
  constructor() { }

  ngOnInit(): void {
    /* for (let i = 0; i < this.materias.length; i++) {
      for (let j = 0; j <= i; j++) {
        console.log(this.materias[i].materiasSemestre[j].materia)
      }
      
    } */
  }

}
