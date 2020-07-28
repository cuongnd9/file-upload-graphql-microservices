import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';
import * as typeDefs from './typeDefs';
import * as resolvers from './resolvers';

const schema = makeExecutableSchema({
    typeDefs: Object.values(typeDefs),
    resolvers: Object.values(resolvers)
});


const app: ApolloServer = new ApolloServer({ schema });

export default app;
