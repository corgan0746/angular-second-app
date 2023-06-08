import { Injectable } from '@angular/core';
import { Character } from './interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 15000
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 8500
},
{
  id: uuid(),
  name: 'Trunks',
  power: 15000
}];

addCharacter(character:Character): void {

  const newCharacter: Character = {...character, id: uuid()}

  console.log('MainPage', newCharacter);
  this.characters.push(newCharacter);
}

// onDeleteEvent(index:number): void {
//   console.log(index);
//   this.characters.splice(index, 1);
// }
onDeleteById(id: string): void{
  console.log(id)
  this.characters = this.characters.filter(ele => ele.id !== id);
}

}
