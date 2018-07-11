import { GraphQLModule } from '@app/graphql/graphql.module';

describe('GraphqlModule', () => {
  let graphqlModule: GraphQLModule;

  beforeEach(() => {
    graphqlModule = new GraphQLModule();
  });

  it('should create an instance', () => {
    expect(graphqlModule).toBeTruthy();
  });
});
