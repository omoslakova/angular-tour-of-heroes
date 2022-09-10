import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Takito' },
      { id: 12, name: 'Chorchie' },
      { id: 13, name: 'Papricio' },
      { id: 14, name: 'Legolas' },
      { id: 15, name: 'Magnito' },
      { id: 16, name: 'Dominik' },
      { id: 17, name: 'Cheldon' },
      { id: 18, name: 'Vintura' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Crystal' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}