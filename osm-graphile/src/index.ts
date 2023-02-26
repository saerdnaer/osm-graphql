import http from 'http';
import { postgraphile, PostGraphileOptions } from 'postgraphile';
import { NodePlugin } from 'graphile-build';
import SimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector';
import ManyToManyPlugin from '@graphile-contrib/pg-many-to-many';
import FilterPlugin from 'postgraphile-plugin-connection-filter';
// import FederationPlugin from 'postgraphile-federation-plugin';


// import InflectorPlugin from './plugins/InflectorPlugin';
// import TimeoutPlugin from './plugins/TimeoutPlugin';
// import ExtendSchemaPlugin from './plugins/ExtendSchemaPlugin';
import DefaultOrderPlugin from './plugins/DefaultOrderPlugin';


const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
	port: process.env.BIND_PORT || '3000',
}

const logger = console;

async function run() {
	const provideGraphiql = true; // isDevelopment

	// see https://www.graphile.org/postgraphile/usage-library/#recommended-options
	const options: PostGraphileOptions = {
		graphiql: provideGraphiql,
		enhanceGraphiql: true,
		dynamicJson: true,
		setofFunctionsContainNulls: false,
		ignoreRBAC: false,
		ignoreIndexes: true,
		enableQueryBatching: true,
		legacyRelations: 'omit',
		showErrorStack: 'json',

		// regular Plugins
		appendPlugins: [
			SimplifyInflectorPlugin, FilterPlugin, ManyToManyPlugin, // InflectorPlugin, ExtendSchemaPlugin, DefaultOrderPlugin
		],
		skipPlugins: [
			NodePlugin
		],
		simpleCollections: 'only',
		graphileBuildOptions: {
			// https://github.com/graphile-contrib/postgraphile-plugin-connection-filter#performance-and-security
			connectionFilterComputedColumns: false,
			connectionFilterSetofFunctions: false,
			connectionFilterLists: false,
			pgOmitListSuffix: true,
		},
		/* pluginHook: makePluginHook([
			TimeoutPlugin({ timeout: config.requestTimeout })
		]), */

		// see watchPg at https://www.graphile.org/postgraphile/usage-library/#api-postgraphilepgconfig-schemaname-options
		// https://github.com/graphile/graphile-engine/blob/master/packages/graphile-build-pg/res/watch-fixtures.sql
		watchPg: isDevelopment || process.env.WATCH_PG === 'true',
		disableQueryLog: !isDevelopment,
		allowExplain: isDevelopment,
		extendedErrors: isDevelopment
			? ['hint', 'detail', 'errcode']
			: ['errcode'],
		disableDefaultMutations: true,
		// pgDefaultRole: 'viewer',
		exportGqlSchemaPath: isDevelopment ? 'schema.graphql' : undefined, // eslint-disable-line no-undefined
		pgSettings: {
			timezone: process.env.TZ || 'Europe/Amsterdam'
		}
	}
	http
  	.createServer(postgraphile(
      process.env.DATABASE_URL || 'postgres:///openstreetmap' || 'postgres://user:pass@host:5432/dbname',
      "public",
			options
		))
		.listen(config.port || 3000);

	const endpoint = `http://localhost:${config.port}`;
	logger.info(`🚀  GraphQL server running on port ${config.port}`);
	logger.info(`GraphQL running at:     ${endpoint}/graphql`);
	logger.info(
		`GraphiQL running at:    ${provideGraphiql ? `${endpoint}/graphiql` : 'DISABLED'}`
	);
}

run();

