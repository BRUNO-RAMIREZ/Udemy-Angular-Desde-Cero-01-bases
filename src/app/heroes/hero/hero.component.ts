import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public name: string;
  public age: number;

  constructor() {
    this.name = 'ironman';
    this.age = 45;
  }

  ngOnInit(): void {
  }

  public get description(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHero(): void {
    this.name = 'Spiderman';
  }

  public changeAge(): void {
    this.age = 25;
  }

  public resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}

