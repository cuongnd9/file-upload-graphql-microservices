import { GraphQLUpload } from 'apollo-server';
// import GraphQLUpload from '../components/scalar';
import { createWriteStream } from 'fs';
import { diana } from 'diana-js';

const resolver = {
  Upload: GraphQLUpload,
  Query: {
    uploads: (_: any, args: any) => {
      console.log('hihihiiiiiiiiii')
      return [];
    },
  },
  Mutation: {
    singleUpload: async (_: any, { file }: { file: any }) => {
      console.log('11111111111111111111111111')
      const { createReadStream, filename, mimetype, encoding } = await file;
      console.log(createReadStream, '---createReadStream------')

      // save stream to file
      const stream = createReadStream();
      const path = `uploads/${diana()}${filename}`;
      await new Promise((resolve, reject) =>
        stream
          .pipe(createWriteStream(path))
          .on("finish", () => resolve({ path, filename, mimetype }))
          .on("error", reject)
      );

      return { filename, mimetype, encoding };
    }
  }
};

export default resolver;
