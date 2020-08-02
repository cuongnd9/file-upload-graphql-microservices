import { GraphQLUpload } from 'apollo-server';
import { writeFileSync } from 'fs';
import { diana } from 'diana-js';

const resolver = {
  Upload: GraphQLUpload,
  Query: {
    uploads: (_: any, args: any) => [],
  },
  Mutation: {
    singleUpload: async (_: any, { file }: { file: any }) => {
      const { createReadStream, filename, mimetype, encoding } = file;
      const path = `uploads/${new Date().getTime()}${filename}`;
      writeFileSync(path, Buffer.from(createReadStream), { encoding: 'utf8' });

      return { filename, mimetype, encoding };
    }
  }
};

export default resolver;
