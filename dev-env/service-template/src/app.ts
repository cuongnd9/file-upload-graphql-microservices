import * as grpc from 'grpc';
import * as handlers from './handlers';
import config from './components/config';

const main = (): void => {
  // create a new gRPC server
  const server: grpc.Server = new grpc.Server();

  // register all handlers
  Object.values(handlers).forEach((handler: { service: any; handler: any }) => {
    server.addService(handler.service, handler.handler);
  });

  // register port and host
  server.bindAsync(
    `0.0.0.0:${config.port}`,
    grpc.ServerCredentials.createInsecure(),
    (error: Error | null, port: number): void => {
      if (error != null) {
        return console.error(error);
      }
      console.log(`gRPC listening on ${port}`);
    },
  );

  // start the gRPC server
  server.start();
}

export default main;

