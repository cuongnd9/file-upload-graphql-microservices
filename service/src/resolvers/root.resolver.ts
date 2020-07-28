import { mergeTypes } from 'merge-graphql-schemas';

import typeDefs from '../typeDefs';

const resolver = {
  getSchema: () => mergeTypes(typeDefs),
};

export default resolver;
