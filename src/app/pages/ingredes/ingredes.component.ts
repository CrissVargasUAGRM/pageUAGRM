import { Component, OnInit } from '@angular/core';
import { redesMV } from '../../constants/misvisredes';
import { MisVis } from '../../models/misvis';
import { redes } from '../../constants/redes';
import { Carrera } from '../../models/carrera';
import { Malla } from "../../models/malla";
import { mallaredes } from "../../constants/mallaredes";

@Component({
  selector: 'app-ingredes',
  templateUrl: './ingredes.component.html',
  styleUrls: ['./ingredes.component.css']
})
export class IngredesComponent implements OnInit {

  public redesData: Carrera = redes;
  public redesMisVis: MisVis = redesMV;
  public mallaDeredes: Malla = mallaredes;

  constructor() { }

  ngOnInit(): void {
  }

}
