import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    users: [User]
  }

  type User {
    id: Int
    name: String
  }
`;

export default typeDefs;
