import { Component } from "@angular/core";

@Component({
  selector: "app-click-me",
  template: `
    <h3> Click-me component </h3>
    <p> Displays a simple text when button is clicked </p>
    <button (click)="onClickMe()">Click me!</button>
    {{ clickMessage }}
  `
})
export class ClickMeComponent {
  clickMessage = "";

  onClickMe() {
    this.clickMessage = "You are my hero!";
  }
}