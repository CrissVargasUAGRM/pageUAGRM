import { Component, Input, OnInit } from '@angular/core';
import { Carrera } from '../../models/carrera';
import { informatica } from "../../constants/informatica";

@Component({
  selector: 'app-carrerahist',
  templateUrl: './carrerahist.component.html',
  styleUrls: ['./carrerahist.component.css']
})
export class CarrerahistComponent implements OnInit {

  @Input() carrera: Carrera = {
    nombre: "",
    sigle: "",
    imagen: "",
    texto1: "",
    texto2: "",
    jefe: ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
