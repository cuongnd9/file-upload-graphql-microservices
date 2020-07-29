import { graphql, buildSchema } from 'graphql';
import { mergeTypes } from 'merge-graphql-schemas';
import { createWriteStream, writeFileSync } from 'fs';
import { diana } from 'diana-js';
// @ts-ignore
import { Upload } from 'graphql-upload';

import typeDefs from './typeDefs';
import resolvers from './resolvers';
import { handleResponse, handleError } from './components';

const schema = buildSchema(mergeTypes(typeDefs));

const callGraphql = async (req: any, callback: Function) => {
  // console.log(req.variables, '-------req.variables-------')
  // console.log(req.variables2, '-------req.variables2-------')
  if (req.variables) {
    writeFileSync(`${__dirname}/../public/${diana()}.png`, req.variables,
      // { encoding: 'utf8' },
    );
  }

  const file = {
    file: {
      filename: 'Screenshot from 2020-07-29 13-54-38.png',
      mimetype: 'image/png',
      encoding: '7bit',
      createReadStream: () => Buffer.from(req.variables),
    }
  } as Upload;
  const variables = { file }

  console.log(variables, '-----------variables-------')

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
