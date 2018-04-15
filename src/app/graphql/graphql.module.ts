import { NgModule } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

@NgModule({
  exports: [
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const http = httpLink.create({ uri: 'https://elq6gje67nha3ovunm3fnil3gu.appsync-api.us-east-1.amazonaws.com/graphql' });
    const auth = new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: new HttpHeaders().set('x-api-key', 'da2-fyh4vxnk3nc7zg6hypmukgnbhq')
      });

      return forward(operation);
    });

    apollo.create({
      link: concat(auth, http),
      cache: new InMemoryCache()
    });
  }
}
