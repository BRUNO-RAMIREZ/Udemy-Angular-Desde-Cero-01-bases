import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public counter: number;

  constructor() {
    this.counter = 10;
  }

  ngOnInit(): void {
  }


  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 10;
  }
}
