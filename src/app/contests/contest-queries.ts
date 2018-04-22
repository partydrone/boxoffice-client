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

export const createContest = gql`
  mutation createContest($title: String!, $startedOn: String!, $endedOn: String!) {
    createContest(input: {title: $title, startedOn: $startedOn, endedOn: $endedOn}) {
      id
      title
      startedOn
      endedOn
    }
  }
`;

export const updateContest = gql`
  mutation updateContest($id: ID!, $title: String, $startedOn: String, $endedOn: String) {
    updateContest(input: {id: $id, title: $title, startedOn: $startedOn, endedOn: $endedOn}) {
      id
      title
      startedOn
      endedOn
    }
  }
`;

export const deleteContest = gql`
  mutation deleteContest($id: ID!) {
    deleteContest(input: {id: $id}) {
      id
      title
    }
  }
`;
