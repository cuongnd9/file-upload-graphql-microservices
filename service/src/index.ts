import { app } from 'grpc-graphql-sdk';

import graphql from './graphql';
import zeebe from './zeebe';
import sequelize from './models';
import { config, migrateDB, updateSchemaForGateway } from './components';

const pathToMigration = `${__dirname}/migrations/`;

const main = async () => {
  try {
    await migrateDB(sequelize, pathToMigration).catch(e => console.error(e, 'migrateDB error'));
    zeebe();
    app(config.port, graphql);
    await updateSchemaForGateway().catch(() => console.error('update schema gateway error'));
  } catch (e) {
    console.error(e, 'global error');
  }
};

main();
