import { Component } from '@angular/core';

@Component({
  selector: 'app-sumup',
  template: `
    <h3> Summary of all the above demos </h3>
    <p> Try adding a new hero using the input below, either by clicking Add button, clicking Enter key or clicking outside the input box with your mouse </p>
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)="addHero(newHero.value)">Add</button>

    <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
  `
})
export class SumupComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}