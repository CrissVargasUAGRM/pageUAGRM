import { Component, Input, OnInit } from '@angular/core';
import { MisVis } from '../../models/misvis';

@Component({
  selector: 'app-misionvision',
  templateUrl: './misionvision.component.html',
  styleUrls: ['./misionvision.component.css']
})
export class MisionvisionComponent implements OnInit {

  @Input() carreraMV: MisVis = {
    misTitle: "",
    miscontent: "",
    visTitle: "",
    viscontent: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
