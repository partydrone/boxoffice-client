import { TestBed, inject } from '@angular/core/testing';

import { ContestResolverService } from './contest-resolver.service';

describe('ContestResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContestResolverService]
    });
  });

  it('should be created', inject([ContestResolverService], (service: ContestResolverService) => {
    expect(service).toBeTruthy();
  }));
});
