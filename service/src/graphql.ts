import { graphql, buildSchema } from 'graphql';
import { mergeTypes } from 'merge-graphql-schemas';
import { diana } from 'diana-js';
// @ts-ignore
import { Upload } from 'graphql-upload';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { handleResponse, handleError } from './components';

const schema = buildSchema(mergeTypes(typeDefs));

const callGraphql = async (req: any, callback: Function) => {
  if (req.variables) {
    console.log(Buffer.from(req.variables), '-------req.variables-------')

  }

  const file = {
    filename: 'Screenshot from 2020-07-29 13-54-38.png',
    mimetype: 'image/png',
    encoding: '7bit',
    createReadStream: Buffer.from(req.variables),
  };
  const variables = { file }
  console.log(req.query, '----req.query-----')
  console.log(variables, '---variables---')
  try {
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
