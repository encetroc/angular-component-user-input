import { Component } from '@angular/core';

@Component({
  selector: 'app-key-up1',
  template: `
    <h3> Key event using the whole event </h3>
    <p> whenever you strike a key, the value of your event is printed below </p>
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v1 {
  values = '';

  /*
  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  */

  onKey(event: KeyboardEvent) { // with type info
    this.values += (event.target as HTMLInputElement).value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up2',
  template: `
    <h3> Key event using the event's value </h3>
    <p> whenever you strike a key, the value of your event is printed below </p>
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_v2 {
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up3',
  template: `
    <h3> Enter key event using the event's value </h3>
    <p> whenever you strike the Enter key, the value of your event is printed below </p>
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v3 {
  value = '';
  onEnter(value: string) { this.value = value; }
}

//////////////////////////////////////////

@Component({
  selector: 'app-key-up4',
  template: `
    <h3> Enter key event using the event's value </h3>
    <p> whenever you strike the Enter key or click outside the input box, the value of your event is printed below </p>
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class KeyUpComponent_v4 {
  value = '';
  update(value: string) { this.value = value; }
}