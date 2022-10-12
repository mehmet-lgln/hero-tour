import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: "First Hero"
  }

  heroes = Heroes;

  selectedHero?: Hero
  onSelect(h: Hero): void {
    this.selectedHero = h;
    console.log(this.selectedHero)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
