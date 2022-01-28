import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-carruselnoticias',
  templateUrl: './carruselnoticias.component.html',
  styleUrls: ['./carruselnoticias.component.css']
})
export class CarruselnoticiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
