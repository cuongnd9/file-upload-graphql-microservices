import { graphql } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { handleResponse, handleError } from './components';

const callGraphql = async (req: any, callback: Function) => {
  const file = {
    filename: 'Screenshot from 2020-07-29 13-54-38.png',
    mimetype: 'image/png',
    encoding: '7bit',
    createReadStream: () => Buffer.from(req.variables),
  };
  const variables = { file }
  try {
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    const result = await graphql(schema, req.query, resolvers, {}, variables);
    console.log(result, '------result')
    if (result.errors) {
      return handleError(null, result.errors[0], callback);
    }
    handleResponse(null, result.data, callback);
  } catch (error) {
    console.log(error, '--errrrrr---')
    handleError(null, error, callback);
  }
};

export default callGraphql;
