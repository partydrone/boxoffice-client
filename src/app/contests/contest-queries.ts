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
  query getContest($id: ID!) {
    getContest(id: $id) {
      id
      title
      startedOn
      endedOn
    }
  }
`;

export const deleteContest = gql`
  mutation deleteContest($id: ID!) {
    deleteContest(id: $id) {
      id
      title
    }
  }
`;
