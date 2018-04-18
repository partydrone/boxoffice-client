import { Component, Input } from '@angular/core';

@Component({
  selector: 'bo-loading-spinner',
  template: `
  <span *ngIf="loading" class="fa-layers fa-fw">
    <i class="fal fa-circle" style="color: #ccc;"></i>
    <i class="fal fa-spinner-third fa-spin" style="color: #33c;"></i>
  </span>
  `
})
export class LoadingSpinnerComponent {
  @Input() loading: boolean;
}
