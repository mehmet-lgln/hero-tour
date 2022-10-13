import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';

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

  heroes: Hero[] = [];

  selectedHero?: Hero
  onSelect(h: Hero): void {
    this.selectedHero = h;
    console.log(this.selectedHero)
  }

  constructor(private heroService: HeroService) { }

  getHeroes(){
    this.heroes = this.heroService.getHeroes()
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
