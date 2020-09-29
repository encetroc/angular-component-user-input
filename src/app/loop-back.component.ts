import { Component } from '@angular/core';
@Component({
  selector: 'app-loop-back',
  template: `
    <h3> Key event using template reference </h3>
    <p> whenever you strike a key, the value of your event is updated below </p>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }