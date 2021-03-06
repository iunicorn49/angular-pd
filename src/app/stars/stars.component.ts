import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  @Input()
  rating = 0;

  stars: boolean[];
  
  @Input()
  readonly = true;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 这个生命钩子会在onInit的时候执行一次
    this.setStars();
  }

  setStars() {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
 
  clickStar(index: number) {
    if (this.readonly) {
      return;
    }
    this.rating = index + 1;
    this.ratingChange.emit(this.rating);
  }
}
