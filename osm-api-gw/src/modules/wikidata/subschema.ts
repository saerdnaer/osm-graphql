import { SelectionSetNode } from 'graphql';

import { RenameTypes, FilterRootFields, RenameRootFields, FilterInterfaceFields, FilterTypes } from '@graphql-tools/wrap';
import { SubschemaConfig, delegateToSchema, defaultMergedResolver } from '@graphql-tools/delegate';
import { TransformQuery } from '@graphql-tools/wrap';

import buildSubschema from '../../schema/subschema';

import config from '../../config';
import logger from '../../logger';

export default async (): Promise<SubschemaConfig> => {
	const { schema, executor } = await buildSubschema(
		'wikimedia', `${config.wikimediaApiUrl}/graphql`, { useSchemaSnapshot: true, debug: true }
	);

	return {
		schema,
		executor,
		// createProxyingResolver: () => defaultMergedResolver,
		transforms: [
			new FilterRootFields((operation, name) => ['wikidata', 'wiki', 'language'].includes(name)),

			// transform wikimedia schema to namespace it
			/*
			new FilterTypes((type) => {
				return (!type.name.includes('Payload'));
			}),
			new RenameTypes((name: string) => {
				switch (name) {
					case 'Node':
						return 'Node';
					default:
						return `W${name}`;
				}
			}),
			new RenameRootFields((operation, name) => {
				if (operation === 'Query' && name === 'node') {
					return 'wikimediaNode';
				}
				return name;
			}),
			*/
		],
	};
};