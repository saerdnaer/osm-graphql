import { createModule, gql } from "graphql-modules";

export const nominatim = createModule({
	id: "nominatim",
	dirname: __dirname,
	typeDefs: [
		gql`
			type NominatimResult {
				displayName: String
				class: String
				type: String
				importance: Float
				address: JSON
				icon: String
				boundingbox: BBox
				_raw: JSON @deprecated(reason: "This field is for debugging only. Do not use in production.")
			}
			type Nominatim {
				hello: String!
			}
			type Query {
				nominatim: Nominatim!
			}
			extend type Node {
				nominatim: NominatimResult
			}
		`,
	],
	resolvers: {
		Nominatim: {
			hello: () => "world",
		},
		Node: {
			nominatim: {
				selections: `{ id }`,
				// TODO fix typing via codegen?
				resolve: async (parent: any, args: any, context: any, info: any) => {
					// TODO: use dataloader via lookupAddressByIds()
					const r = await(await context.lookupAddressByIds.load(`n${parent.id}`));
					return { ...r, displayName: r.display_name, _raw: r };
				},
			},
		}
	},
});
