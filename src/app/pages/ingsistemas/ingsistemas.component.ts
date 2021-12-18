import { Component, OnInit } from '@angular/core';
import { Carrera } from '../../models/carrera';
import { sistemas } from "../../constants/sistemas";
import { MisVis } from '../../models/misvis';
import { sistemasMV } from '../../constants/misvissistemas';
import { Malla } from "../../models/malla";
import { mallasis } from "../../constants/mallasis";

@Component({
  selector: 'app-ingsistemas',
  templateUrl: './ingsistemas.component.html',
  styleUrls: ['./ingsistemas.component.css']
})
export class IngsistemasComponent implements OnInit {

  public sistemasData: Carrera = sistemas;
  public sisMisVis: MisVis = sistemasMV;
  public mallasis: Malla = mallasis;

  constructor() { }

  ngOnInit(): void {
  }

}
