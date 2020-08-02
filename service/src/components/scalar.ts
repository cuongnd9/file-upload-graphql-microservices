const { GraphQLScalarType, GraphQLError } = require('graphql');

export default new GraphQLScalarType({
  name: 'Upload',
  description: 'The `Upload` scalar type represents a file upload.',
  parseValue(value: any) {
    console.log('custom scalar--------------------')
    // if (value instanceof Upload) return value.promise;
    // throw new GraphQLError('Upload value invalid.');
    return value;
  },
  parseLiteral(ast: any) {
    throw new GraphQLError('Upload literal unsupported.', ast);
  },
  serialize() {
    throw new GraphQLError('Upload serialization unsupported.');
  },
});
