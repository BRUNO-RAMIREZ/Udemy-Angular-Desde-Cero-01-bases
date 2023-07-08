import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {
  @Output() public onNewCharacter: EventEmitter<Character>;

  public character: Character;

  constructor() {
    this.character = {
      name: '',
      power: 0
    }
    this.onNewCharacter = new EventEmitter<Character>();
  }

  ngOnInit(): void {
  }

  public emitCharacter(): void {
    if (this.character.name.length === 0) {
      return;
    }
    this.onNewCharacter.emit(this.character);

    this.character.name = '';
    this.character.power = 0;
  }
}
