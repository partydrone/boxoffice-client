import { Component, Input } from '@angular/core';

@Component({
  selector: 'bo-loading-spinner',
  template: `<i *ngIf="loading" class="fal fa-spinner-third fa-spin"></i>`
})
export class LoadingSpinnerComponent {
  @Input() loading: boolean;
}
