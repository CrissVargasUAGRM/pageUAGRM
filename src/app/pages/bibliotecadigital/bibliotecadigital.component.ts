import { Component, OnInit } from '@angular/core';
import { materiasFac } from '../../constants/materias';
import { Materias } from '../../models/materias';

@Component({
  selector: 'app-bibliotecadigital',
  templateUrl: './bibliotecadigital.component.html',
  styleUrls: ['./bibliotecadigital.component.css']
})
export class BibliotecadigitalComponent implements OnInit {

  public materiasData: Materias[] = materiasFac;

  constructor() { }

  ngOnInit(): void {
  }

}
