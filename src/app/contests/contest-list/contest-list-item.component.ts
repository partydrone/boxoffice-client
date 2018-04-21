import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Contest } from '../contest';

@Component({
  selector: 'bo-contest-list-item',
  templateUrl: './contest-list-item.component.html',
  styleUrls: ['./contest-list-item.component.scss']
})
export class ContestListItemComponent {
  @Input() contest: Contest;
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  deleteContest(id: string): void {
    console.log(`Clicked delete button for contest ${id}.`);
    this.deleteClicked.emit(id);
  }

}
