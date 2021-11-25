import { Component, OnInit } from '@angular/core';
import { items } from 'src/app/constants/carousel';
import { Carousel } from 'src/app/models/carousel';

@Component({
  selector: 'app-firtspage',
  templateUrl: './firtspage.component.html',
  styleUrls: ['./firtspage.component.css']
})
export class FirtspageComponent implements OnInit {

  /* datos del carusel */
  public carouselData: Carousel[] = items;

  constructor() { }

  ngOnInit(): void {
  }

}
