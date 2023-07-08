import {Injectable} from "@angular/core";

import {v4 as uuid} from 'uuid';

import {Character} from "../interfaces/character.interface";

/**
 * Author: Bruno Ramirez
 */
@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Array<Character>;

  constructor() {
    this.characters = [{
      id: uuid(),
      name: 'Krilin',
      power: 1000
    }, {
      id: uuid(),
      name: 'Goku',
      power: 10000
    }, {
      id: uuid(),
      name: 'Vegetta',
      power: 8500
    }]
  }
  public addCharacter(character: Character): void {
    const newCharacter: Character = {id: uuid(), ...character};
    this.characters.push(newCharacter);
  }
  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
