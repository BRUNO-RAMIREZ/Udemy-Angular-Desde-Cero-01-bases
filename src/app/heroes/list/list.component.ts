import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public heroNames: string[];
  public deleteHero: string;

  constructor() {
    this.heroNames = [
      'Spiderman',
      'Ironman',
      'Hulk',
      'She Hulk',
      'Thor'
    ]
    this.deleteHero = '';
  }

  ngOnInit(): void {
  }

  public removeLastHero(): void {
    this.deleteHero = this.heroNames.pop() || '';
  }
}
