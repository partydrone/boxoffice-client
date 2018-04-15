import { TestBed, inject } from '@angular/core/testing';

import { ContestResolver } from './contest-resolver.service';

describe('ContestResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContestResolver]
    });
  });

  it('should be created', inject([ContestResolver], (service: ContestResolver) => {
    expect(service).toBeTruthy();
  }));
});
