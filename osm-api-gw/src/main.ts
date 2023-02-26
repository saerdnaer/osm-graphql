import { createServer } from '@graphql-yoga/node'
import { useGraphQLModules } from '@envelop/graphql-modules'


import config from './config';
import { application } from './application'
import { buildSchema } from './schema';

const main = async () => {

  const server = createServer({
    port: config.port as number,
    schema: await buildSchema(),
    plugins: [useGraphQLModules(application)],
  })

  await server.start();
  console.log(`🚀 osm-api-gw is running on http://localhost:${config.port}/graphql`);
}

main();