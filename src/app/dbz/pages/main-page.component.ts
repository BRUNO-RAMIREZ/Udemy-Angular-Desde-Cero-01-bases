import {Component} from "@angular/core";
import {Character} from "../interfaces/character.interface";
import {DbzService} from "../services/dbz.service";

/**
 * Author: Bruno Ramirez
 */
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  constructor(private _dbzService: DbzService) {
  }

  public get characters(): Character[] {
    return [...this._dbzService.characters];
  }

  public onNewCharacter(character: Character): void {
    this._dbzService.addCharacter(character);
  }

  public onDeleteCharacter(id: string): void {
    this._dbzService.deleteCharacterById(id);
  }
}
