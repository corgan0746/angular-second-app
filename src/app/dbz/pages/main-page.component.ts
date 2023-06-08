
import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainDbzPageComponent  {

  constructor( private dbzService: DbzService ) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string): void{
    console.log(id);

    if(id === undefined) return;

    this.dbzService.onDeleteById(id);

  }

  onNewCharacter(character:Character): void {
    this.dbzService.addCharacter(character);
  }
}
