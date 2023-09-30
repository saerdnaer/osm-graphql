import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { useGraphQLModules } from '@envelop/graphql-modules'

import config from './config';
import { application } from './application'
import { buildSchema } from './schema';

const main = async () => {

  const yoga = createYoga({
    schema: await buildSchema(),
    plugins: [useGraphQLModules(application)],
    graphiql: {
      title: 'OSM GraphiQL',
      showAttribution: false,
    } as any,
  });

  const server = createServer(yoga);
  server.listen(config.port, () => {
    console.log(`🚀 osm-api-gw is running on http://localhost:${config.port}/graphql`);
  })
}

main();