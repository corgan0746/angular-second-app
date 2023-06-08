import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacterComponent {
  public character: Character = {
    id: '',
    name: '',
    power: 0
  }

  // We create a new Event Emitter
  // And declare it as an Output so it can send the event and the data to the parent
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter():void {
    if(this.character.name.length === 0) return;

    //Adds a Breakpoint for debbuging on the browser
    //debugger;

    this.onNewCharacter.emit(this.character);

    this.character = {id: '',name: '',power: 0};
  }
}
