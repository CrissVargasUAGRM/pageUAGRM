import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {Carousel} from 'materialize-css';
import { Noticias } from 'src/app/models/noticias';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  @Input() width = 500;
  @Input() height = 500;
  @Input() itemsNoc: Noticias[] = [];

  public finalHeight: string | number = 0;
  public finalWidth: string | number = 0;
  public currentPosition = -1;

  constructor(){
    this.finalWidth =  `${this.width}px`;
    this.finalHeight = `${this.height}px`;
  }

  ngOnInit(): void {
    this.itemsNoc.map((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });
    this.setCurrentPosition(-1);
  }

  setCurrentPosition(position: number){
    this.currentPosition = position;
    let pos = this.itemsNoc.find( i => i.id === 0);
    if(pos){
      pos.marginLeft = -50 * position;
    }
  }

  setNext(){
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if(nextPosition <= this.itemsNoc.length){
      finalPercentage = -50 * nextPosition;
    }else{
      nextPosition = 0;
    }
    let pos = this.itemsNoc.find(i => i.id === 0);
    if(pos){
      pos.marginLeft = finalPercentage;
    }
    this.currentPosition = nextPosition;
  }
  
  setBack(){
    let finalPorcentage = 0;
    let backPosition = this.currentPosition - 1;
    if(backPosition >= 0){
      finalPorcentage = -50 * backPosition;
    }else{
      backPosition = this.itemsNoc.length;
      finalPorcentage = -50 * backPosition;
    }
    let pos = this.itemsNoc.find(i => i.id === 0);
    if(pos){
      pos.marginLeft = finalPorcentage;
    }
    this.currentPosition = backPosition;
  }

}
