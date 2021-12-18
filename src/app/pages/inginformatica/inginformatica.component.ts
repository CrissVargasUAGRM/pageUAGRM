import { Component, OnInit } from '@angular/core';
import { Carrera } from "../../models/carrera";
import { informatica } from "../../constants/informatica";
import { MisVis } from '../../models/misvis';
import { informaticaMV } from "../../constants/misvisinformatica";
import { Malla } from '../../models/malla';
import { mallainf } from "../../constants/mallainf";

@Component({
  selector: 'app-inginformatica',
  templateUrl: './inginformatica.component.html',
  styleUrls: ['./inginformatica.component.css']
})
export class InginformaticaComponent implements OnInit {

  public informaticaData: Carrera = informatica;
  public infMisVis: MisVis = informaticaMV;
  public infmalla: Malla = mallainf;

  constructor() { }

  ngOnInit(): void {
  }

}
