import { Component, OnInit } from '@angular/core';
//import { HEROES } from '../mock-heroes';
import {Hero} from '../hero'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService:HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log( this.selectedHero );
  }
}




