import express, { Express } from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { GraphQLSchema } from 'graphql';
import { makeRemoteExecutableSchema, mergeSchemas } from 'graphql-tools';
import { handleError, getSchema, relay, config } from './components';
import { GraphqlController, SchemaController } from './controllers';
import { validateApiKey } from './components';

const main = async () => {
  const app: Express = express();

  app.use(helmet());
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const schemas: GraphQLSchema[] = await Promise.all(
    Object.values(config.services).map(async service => makeRemoteExecutableSchema({
      schema: await getSchema(service.url),
      fetcher: await relay(service.url),
    }))
  );
  app.locals.schema = mergeSchemas({ schemas });

  const graphqlController = new GraphqlController();
  const schemaController = new SchemaController();
  app.post('/', validateApiKey(), graphqlController.action('index'));
  app.put('/schema', schemaController.action('update'));

  app.use(handleError);

  app.listen(config.port, () => console.log(`Server ready at http://127.0.0.1:${config.port}`));
};

main();
