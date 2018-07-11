import { ContestsModule } from '@app/contests/contests.module';

describe('ContestsModule', () => {
  let contestsModule: ContestsModule;

  beforeEach(() => {
    contestsModule = new ContestsModule();
  });

  it('should create an instance', () => {
    expect(contestsModule).toBeTruthy();
  });
});
