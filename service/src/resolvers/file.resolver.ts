import { GraphQLUpload } from 'apollo-server';
import { createWriteStream } from 'fs';
import { diana } from 'diana-js';

const resolver = {
  Upload: GraphQLUpload,
  Query: {
    uploads: (_: any, args: any) => { },
  },
  Mutation: {
    singleUpload: async (_: any, { file }: { file: any }) => {
      return {
        filename: 'Screenshot from 2020-07-29 13-54-38.png',
        mimetype: 'image/png',
        encoding: '7bit',
      }
      // console.log('11111111111111111111111111')
      // const { createReadStream, filename, mimetype, encoding } = await file;

      // // save stream to file
      // const stream = createReadStream();
      // const path = `uploads/${diana()}${filename}`;
      // await new Promise((resolve, reject) =>
      //   stream
      //     .pipe(createWriteStream(path))
      //     .on("finish", () => resolve({ path, filename, mimetype }))
      //     .on("error", reject)
      // );

      // return { filename, mimetype, encoding };
    }
  }
};

export default resolver;
