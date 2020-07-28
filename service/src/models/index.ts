import { Sequelize } from 'sequelize';

import { config } from '../components';

const sequelize = new Sequelize({
  dialect: 'postgres',
  username: config.pgUser,
  password: config.pgPassword,
  database: config.pgDB,
  host: config.pgHost,
  port: config.pgPort,
  logging: config.nodeEnv === 'development' ? console.log : false,
  define: {
    underscored: true,
  },
});

sequelize
  .authenticate()
  .catch((error) => {
    // TODO: add logger
    console.log(error);
  });

export default sequelize;
