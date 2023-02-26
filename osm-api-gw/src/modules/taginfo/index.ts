import { createModule, gql } from "graphql-modules";

export const taginfo = createModule({
	id: "taginfo",
	dirname: __dirname,
	typeDefs: [
		gql`
			type Query {
				taginfo: Taginfo!
				projects: [Project!]
				project: Project
			}
			type Taginfo {
				keys(query: String): JSON
				tags(query: String): JSON
			}
			type Image {
				url: String!
			}
			type Project {
				url: String!,
				id: ID!
				name: String!,
				icon: Image,
				description: String
				doc_url: String,
				key_entries: Int!
				tag_entries: Int!
				unique_keys: Int!
				unique_tags: Int!
				_raw: JSON @deprecated(reason: "This field is for debugging only. Do not use in production.")
			}
		`,
	],
	resolvers: {
		Query: {
			taginfo: () => "world",
		},
	},
});
