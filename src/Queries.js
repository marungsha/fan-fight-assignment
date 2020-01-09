import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

export default new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: 'https://api.devcdc.com/cricket',
    }),
    defaultOptions
  });


export const SCHEDULES = gql`
query getMatchSchedule($type: String!, $status: String!, $page: Int!) {
    schedule(type: $type, status: $status, page: $page) {
      matchID
      seriesName
      startDate
      homeTeamName
      awayTeamName
      matchNumber
      venue
    }
  }
`;

