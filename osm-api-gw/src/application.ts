import { print } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { stitchingDirectives } from "@graphql-tools/stitching-directives";
import { mergeSchemas } from "@graphql-tools/schema";

import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { createApplication, gql } from "graphql-modules";

import { modules } from "./modules";
import { buildSchema } from "./schema";

// based on  https://github.com/Urigo/graphql-modules/issues/2065#issuecomment-1070960140
const { stitchingDirectivesTypeDefs, stitchingDirectivesValidator } = stitchingDirectives();

const sdlQuerySchema = gql`
  type Query {
    _sdl: String!
  }
`;

// This is your application, it contains your GraphQL schema and the implementation of it.
export const application = createApplication({
	modules,
  /*
 	schemaBuilder: async ({ typeDefs, resolvers }) => {
		const directivesTypeDefs = mergeTypeDefs([stitchingDirectivesTypeDefs, typeDefs, sdlQuerySchema]);
		const sdlQueryResolvers = {
			Query: {
				_sdl: () => print(directivesTypeDefs),
			},
		};

		const mergedResolvers = mergeResolvers([resolvers as any, sdlQueryResolvers]);
		const modulesSchema = makeExecutableSchema({
			typeDefs: directivesTypeDefs,
			// schemaTransforms: [stitchingDirectivesValidator],
			resolvers: mergedResolvers,
		});

    const osmSchema = await buildSchema();

    return mergeSchemas({
      schemas: [
        osmSchema,
        modulesSchema
      ],
    });
	},
  */
});
