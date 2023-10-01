import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { renderGraphiQL } from '@graphql-yoga/render-graphiql'
import { useGraphQLModules } from '@envelop/graphql-modules'
import DataLoader from 'dataloader';

import config from './config';
import { application } from './application'
import { buildSchema } from './schema';
import { loadQuery } from './utils';

import NominatimAPI from './modules/nominatim/datasource';
import { NominatimResult } from './modules/nominatim/types';


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
    context: (ctx) => {
      const nominatim = new NominatimAPI();

      return {
        nominatim,
        lookupAddressByIds: new DataLoader<string,NominatimResult | undefined>(
          async (keys) => {
            const result: { [key: string]: NominatimResult } = (await nominatim.lookup({ osm_ids: keys.join(','), format: 'json' }))
              .reduce((acc, r) => ({ ...acc, [`${r.osm_type.substring(0,1)}${r.osm_id}`]: r }), {});
            return keys.map((id) => result[id]);
          }
        )
      }
    }
  });

  const server = createServer(yoga);
  server.listen(config.port, () => {
    console.log(`🚀 osm-api-gw is running on http://localhost:${config.port}/graphql`);
  })
}

main();