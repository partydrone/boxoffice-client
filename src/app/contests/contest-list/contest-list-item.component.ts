import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Contest } from '../contest';

@Component({
  selector: 'bo-contest-list-item',
  templateUrl: './contest-list-item.component.html',
  styleUrls: ['./contest-list-item.component.scss']
})
export class ContestListItemComponent {
  @Input() contest: Contest;
  @Output() deleteClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private router: Router) { }

  editContest(id: string): void {
    this.router.navigate(['/contests', id, 'edit']);
  }

  deleteContest(id: string) {
    this.deleteClicked.emit(id);
  }

}
