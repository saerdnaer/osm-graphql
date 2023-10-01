import { createModule, gql } from "graphql-modules";

export const taginfo = createModule({
	id: "taginfo",
	dirname: __dirname,
	typeDefs: [
		gql`
			type Query {
				taginfo: Taginfo!
				"""Projects from Taginfo"""
				projects: [Project!]
				"""Project from Taginfo"""
				project: Project
			}
			type Taginfo {
				"""Stats for this key(s) from Taginfo"""
				keys(query: String): JSON
				"""Stats for this key/value combinations from Taginfo"""
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
