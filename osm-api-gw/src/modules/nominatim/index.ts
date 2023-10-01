import { createModule, gql } from "graphql-modules";
import addressFormatter, { CommonOptions as AddressFormatterOptions } from "@fragaria/address-formatter";

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
				address(
					format: Boolean
					abbreviate: Boolean
					appendCountry: Boolean
					cleanupPostcode: Boolean
					countryCode: String
					fallbackCountryCode: String
					output: AFOutput = array
				): JSON
				icon: String
				boundingbox: BBox
				_raw: JSON @deprecated(reason: "This field is for debugging only. Do not use in production.")
			}
			enum AFOutput {
				string
				array
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
		NominatimResult: {
			address: (parent: any, args: AddressFormatterOptions & { format?: Boolean; output?: 'array' | 'string' |'object' }) => {
				if (!args || args?.format === false || args?.output === 'object' ) {
					return parent.address;
				}
				return addressFormatter.format(parent.address, args as AddressFormatterOptions);
			}
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
