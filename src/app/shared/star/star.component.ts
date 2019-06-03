import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  @Input() rating;
  ratingWidth:number;
  ratingArray:[]
  constructor() { }

  ngOnInit() {
    console.log("rating recevied is" + this.rating);
  }

  ngOnChanges(){
    this.ratingWidth = this.rating * 85/5;

  }

}
