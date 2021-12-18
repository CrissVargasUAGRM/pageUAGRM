import { Component, Input, OnInit } from '@angular/core';
import { Malla } from 'src/app/models/malla';

@Component({
  selector: 'app-malla',
  templateUrl: './malla.component.html',
  styleUrls: ['./malla.component.css']
})
export class MallaComponent implements OnInit {

  @Input() mallaDatos: Malla = {
    mallatitle: "",
    mallacontent: "",
    imagen: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
