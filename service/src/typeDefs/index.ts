import fs from 'fs';
import path from 'path';
import { typeDefs as scalarTypeDefs } from 'graphql-scalars';

import root from './root.typeDef';

let typeDefs: string[] = [root, ...scalarTypeDefs];
fs
  .readdirSync(__dirname)
  .filter((fileName) => /typeDef.ts$/.test(fileName) && fileName.split('.')[0] !== 'root')
  .forEach((fileName) => {
    const typeDef = require(path.join(__dirname, fileName));

    typeDefs = [
      ...typeDefs,
      typeDef.default,
    ];
  });

export default typeDefs;
