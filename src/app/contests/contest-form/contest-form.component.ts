import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { Contest } from '../contest';

function endOccursOnOrAfterStartDate(c: AbstractControl): { [key: string]: boolean } | null {
  const starts = c.get('startedOn');
  const ends   = c.get('endedOn');

  if (starts.value <= ends.value) {
    return null;
  }

  return { 'match': true };
}

@Component({
  selector:    'bo-contest-form',
  templateUrl: './contest-form.component.html',
  styleUrls:   ['./contest-form.component.scss']
})
export class ContestFormComponent implements OnInit {
  @Input () contest:     Contest;
  @Output() saveContest: EventEmitter<Contest> = new EventEmitter<Contest>();
          contestForm:   FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contestForm = this.fb.group({
      title:         [this.contest.title, Validators.required],
      dateGroup: this.fb.group({
        startedOn: [this.contest.startedOn, Validators.required],
        endedOn:   [this.contest.endedOn, Validators.required]
      }, {
        validator: endOccursOnOrAfterStartDate
      })
    });
  }

  save() {
    if (this.contestForm.dirty && this.contestForm.valid) {
      const contest = Object.assign({}, this.contest, { title: this.contestForm.value.title }, this.contestForm.value.dateGroup);
      this.saveContest.emit(contest);
    }
  }

}
