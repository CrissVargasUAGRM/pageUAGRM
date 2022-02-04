import { Component, OnInit } from '@angular/core';
import { items } from 'src/app/constants/carousel';
import { noticiasFac } from 'src/app/constants/noticias';
import { Carousel } from 'src/app/models/carousel';
import { Noticias } from 'src/app/models/noticias';

@Component({
  selector: 'app-firtspage',
  templateUrl: './firtspage.component.html',
  styleUrls: ['./firtspage.component.css']
})
export class FirtspageComponent implements OnInit {

  /* datos del carusel */
  public carouselData: Carousel[] = items;

  public noticiasData: Noticias[] = noticiasFac;

  constructor() { }

  ngOnInit(): void {
  }

}
