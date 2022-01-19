import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApifacebookService {

  public tokenFB: string = "";  /* TOKEN DE PAGINA FACEBOOK SE NECESITA UNO CADA MEDIA HORA */

  public path: string = "";  /* DIRECCION A DONDE HACER LA CONSULTA A GRAPH FACEBOOK API */

  constructor() { }
}
