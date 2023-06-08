import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  onDeleteEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = []

  onDeleteCharacter(id:string): void{
    console.log(id);

    if(id === undefined) return;

    this.onDeleteEvent.emit(id);

  }
}
