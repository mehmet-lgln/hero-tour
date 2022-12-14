import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input() hero?: Hero

  hero: Hero | undefined

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.heroService.getHero(id).subscribe(h=> this.hero = h)
  }

  goBack(): void {
    this.location.back()
  }

  handleSave(): void {
    if(this.hero)
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack())
  }

}
