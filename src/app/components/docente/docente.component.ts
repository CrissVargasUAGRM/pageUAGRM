import { Component, Input, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {

  @Input() docentes: Docente[] = [
    {
      img: "",
      nombre: ""
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
