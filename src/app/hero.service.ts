import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { Heroes } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(Heroes)
    this.messageService.add("fetched heroes")
    console.log(this.messageService.message)
    return heroes
  }

  getHero(id: number): Observable<Hero> {
    const hero = Heroes.find(h => h.id === id)!
    this.messageService.add(`fetched hero id: ${id}`)
    return of(hero)
  }
}
