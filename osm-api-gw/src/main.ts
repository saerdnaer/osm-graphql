import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { renderGraphiQL } from '@graphql-yoga/render-graphiql'
import { useGraphQLModules } from '@envelop/graphql-modules'

import config from './config';
import { application } from './application'
import { buildSchema } from './schema';
import { loadQuery } from './utils';


const main = async () => {

  const yoga = createYoga({
    schema: await buildSchema(),
    plugins: [useGraphQLModules(application)],
    landingPage: false,
    maskedErrors: false,
    renderGraphiQL,
    graphqlEndpoint: {} as any, // we want to answer to both / and /graphql
    graphiql: {
      title: 'OSM GraphiQL',
      showAttribution: false,
      defaultQuery: loadQuery('examples/default'),
    } as any,
  });

  const server = createServer(yoga);
  server.listen(config.port, () => {
    console.log(`🚀 osm-api-gw is running on http://localhost:${config.port}/graphql`);
  })
}

main();