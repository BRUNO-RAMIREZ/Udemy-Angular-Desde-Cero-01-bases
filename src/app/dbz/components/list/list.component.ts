import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() characterList: Array<Character>;

  @Output() onDeleteEventEmit: EventEmitter<string>;
  constructor() {
    this.characterList = [];
    this.onDeleteEventEmit = new EventEmitter<string>();
  }

  ngOnInit(): void {
  }

  public onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeleteEventEmit.emit(id);
  }
}
