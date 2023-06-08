import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'My First Angular App';

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
