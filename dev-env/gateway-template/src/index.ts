import app from './app';
import config from './components/config';

app.listen({ port: config.port }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

