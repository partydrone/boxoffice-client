import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestListItemComponent } from './contest-list-item.component';

describe('ContestListItemComponent', () => {
  let component: ContestListItemComponent;
  let fixture: ComponentFixture<ContestListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
