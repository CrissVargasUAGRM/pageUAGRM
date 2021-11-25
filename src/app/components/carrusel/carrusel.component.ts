import { Component, Input, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  /* Custom properties */
  @Input() items: Carousel[] = [];

  /* Final properties */
  public currentPosition = 0;

  constructor() {

  }

  ngOnInit(): void {
    this.items.map((i, index) => {
      i.id = index;
    });
  }

  setCurrentPosition(position: number){
    this.currentPosition = position;
    let pos = this.items.find( i => i.id === 0);
    if(pos){
      pos.marginLeft = -100 * position;
    }
  }

  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.items.length - 1){
      finalPercentage = -100 * nextPosition;
    }else{
      nextPosition = 0;
    }
    let pos = this.items.find(i => i.id === 0);
    if(pos){
      pos.marginLeft = finalPercentage;
      this.currentPosition = nextPosition;
    }
  }

  setBack(){
    let finalPorcentage = 0;
    let backPosition = this.currentPosition - 1;
    if(backPosition >= 0){
      finalPorcentage = -100 * backPosition;
    }else{
      backPosition = this.items.length - 1;
      finalPorcentage = -100 * backPosition;
    }
    let pos = this.items.find(i => i.id === 0);
    if(pos){
      pos.marginLeft = finalPorcentage;
      this.currentPosition = backPosition;
    }
  }
}
