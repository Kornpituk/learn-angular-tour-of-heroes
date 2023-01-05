import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Wolverine' },
      { id: 2, name: 'Spider-Man' },
      { id: 3, name: 'Thor' },
      { id: 4, name: 'Iron Man' },
      { id: 5, name: 'Hulk' },
      { id: 6, name: 'Captain America' },
      { id: 7, name: 'Daredevil' },
      { id: 8, name: 'Punisher' },
      { id: 9, name: 'Deadpool' },
      { id: 10, name: 'Silver Surfer' },
    ];
    return { heroes };
  }
  //Overrides the genId method to ensure that a hero always has an id.
  // If the herores array is empty.
  //the method below returns the initial number (11).
  // If the heroes array is not empty, the method below returns the highest.
  // hero id + 1
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }

  constructor() {}
}
