import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>New Counter: {{ counter }}</h3>
  <button (click)="changeNumber(1)" >+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="changeNumber(-1)">-1</button>`
})
export class CounterComponent{
  public counter: number = 10;

  changeNumber(value: number):void {
    if(this.counter === 0 && value === -1){
      return;
    }
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
      return;
  }
}
