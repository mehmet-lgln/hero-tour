import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: "First Hero"
  // }

  heroes: Hero[] = [];

  // selectedHero?: Hero
  // onSelect(h: Hero): void {
  //   this.selectedHero = h;
  //   console.log(this.selectedHero)
  //   this.messageService.add(`selected hero: ${h.name}`)
  //   console.log(this.messageService.message)
  // }

  constructor(private heroService: HeroService) { }

  getHeroes(){
    this.heroService.getHeroes().subscribe(h => this.heroes = h)
  }

  addHero(name: string){
    name = name.trim()
    if(!name) return;
    this.heroService.addHero({ name } as Hero).subscribe(h => this.heroes.push(h))
  }

  ngOnInit(): void {
    this.getHeroes()
  }

}
