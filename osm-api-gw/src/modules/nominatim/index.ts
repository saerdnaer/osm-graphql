import { createModule, gql } from "graphql-modules";

export const ckan = createModule({
	id: "nomintim",
	dirname: __dirname,
	typeDefs: [
		gql`
			type Query {
				hello: String!
			}
		`,
	],
	resolvers: {
		Query: {
			hello: () => "world",
		},
	},
});
