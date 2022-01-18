import { Component, OnInit } from '@angular/core';
import { docentes } from 'src/app/constants/docentes';
import { Docente } from 'src/app/models/docente';

@Component({
  selector: 'app-facultadpage',
  templateUrl: './facultadpage.component.html',
  styleUrls: ['./facultadpage.component.css']
})
export class FacultadpageComponent implements OnInit {

  public docs: Docente[] = docentes; 

  constructor() { }

  ngOnInit(): void {
  }

}
