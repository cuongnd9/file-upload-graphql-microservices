import { graphql, buildSchema } from 'graphql';
import { mergeTypes } from 'merge-graphql-schemas';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { handleResponse, handleError } from './components';

const schema = buildSchema(mergeTypes(typeDefs));

const callGraphql = async (req: any, callback: Function) => {
  console.log(req.variables, '-------req.variables-------')
  try {
    const result = await graphql(schema, req.query, resolvers, {}, JSON.parse(req.variables || '{}'));
    if (result.errors) {
      // FIXME: handle multi errors
      return handleError(null, result.errors[0], callback);
    }
    handleResponse(null, result.data, callback);
  } catch (error) {
    handleError(null, error, callback);
  }
};

export default callGraphql;
