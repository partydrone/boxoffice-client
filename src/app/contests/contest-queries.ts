import gql from 'graphql-tag';

export const listContests = gql`
  query {
    listContests {
      items {
        id
        title
      }
    }
  }
`;

export const getContest = gql`
  query getContest($id: String!) {
    getContest(id: $id) {
      id
      title
      startedOn
      endedOn
    }
  }
`;
