import { createModule, gql } from "graphql-modules";
import { version } from "os";
import { OverpassElement, OverpassJson, overpassJson } from "overpass-ts";

import { BBox, OverpassResponseFormat, Query, QueryOverpassArgs, Resolvers } from "../generated/graphql";
import { osmBaseTypes } from "../osm-base";

const resolvers: Resolvers = {
	Query: {
		overpass: async (_, { bbox, query, out, format, timeout, ...options }, context, _info) => {
			const response = await overpassJson(
				buildQuery({ bbox, query, out, format }),
				options
			);

			context.nodes = response.elements
				.filter((element) => element.type === "node")
				.reduce((acc, element) => ({ ...acc, [element.id]: element }), {});

			context.ways = response.elements
				.filter((element) => element.type === "way")
				.reduce((acc, element) => ({ ...acc, [element.id]: element }), {});

			context.relation = response.elements
				.filter((element) => element.type === "relation")
				.reduce((acc, element) => ({ ...acc, [element.id]: element }), {});

			return {
				...response,
				elements: response.elements.map((element) => (
					{ ...element, __typename: ucfirst(element.type), _raw: element }
				)),
				_raw: response
			} as any;
		}
	},
	OverpassResponse: {
		nodes: async ({ elements }, _args, context, _info) => {
			return elements?.filter((element) => (element as unknown as OverpassElement).type === "node") as any;
		},
		ways: async ({ elements }, _args, context, _info) => {
			return elements?.filter((element) => (element as unknown as OverpassElement).type === "way") as any;
		},
		relations: async ({ elements }, _args, context, _info) => {
			return elements?.filter((element) => (element as unknown as OverpassElement).type === "relation") as any;
		},
		areas: async ({ elements }, _args, context, _info) => {
			return elements?.filter((element) => (element as unknown as OverpassElement).type === "area") as any;
		},
		timelines: async ({ elements }, _args, context, _info) => {
			return elements?.filter((element) => (element as unknown as OverpassElement).type === "timeline") as any;
		},
	},
	Node: {
		// latitude: ({ lat }) => lat, 		// @ts-expect-error
		// longitude: ({ lon }) => lon,
		uri:  ({ id, version }) => `https://osm.org/node/${id}` + (version ? `#v${version}` : ''),
		_raw: (source) => source,
	},
	Way: {
		nodes: async (parent, _args, context, _info) => {
			return (parent.nodes as unknown as number[]).map((node_id) => context.nodes[node_id]);
		},
		uri:  ({ id, version }) => `https://osm.org/way/${id}` + (version ? `#v${version}` : ''),
		_raw: (source) => source,
	},
	Relation: {
		members: async (parent, _args, context, _info) => {
			return (parent.nodes as unknown as number[]).map((node_id) => context.nodes[node_id]) as any;
		},
		nodes: async (parent, _args, { nodes }, _info) => {
			return (parent.nodes as unknown as number[]).map((node_id) => node_id in nodes ? nodes[node_id] : null);
		},
		uri:  ({ id, version }) => `https://osm.org/relation/${id}` + (version ? `#v${version}` : ''),
		_raw: (source) => source,
	},

};

export const overpass = createModule({
	id: "overpass",
	dirname: __dirname,
	typeDefs: [
		osmBaseTypes,
		gql`
			enum OverpassResponseFormat {
				JSON
				XML
				GEOJSON
			}
			scalar URL
			scalar JSON

			union ElementUnion = Node | Way | Relation
			interface Element {
				id: ID!
				tags: JSON
				_raw: JSON
			}
			extend type Node implements Element {
				_raw: JSON	@deprecated(reason: "This field is for debugging only. Do not use in production.")
				uri: URL!
			}
			extend type Way implements Element {
				_raw: JSON	@deprecated(reason: "This field is for debugging only. Do not use in production.")
				uri: URL!
			}
			extend type Relation implements Element {
				_raw: JSON	@deprecated(reason: "This field is for debugging only. Do not use in production.")
				uri: URL!
			}
			extend type Area implements Element {
				_raw: JSON	@deprecated(reason: "This field is for debugging only. Do not use in production.")
			}
			type Timeline implements Element {
				id: ID!
				tags: JSON
				_raw: JSON	@deprecated(reason: "This field is for debugging only. Do not use in production.")
			}

			type Query {
				overpass(
					"bbox can be comma seperated string, a list \`[south,west,north,east]\`, or object \`{south: 1, west: 2, north: 3, east: 4}\`"
					bbox: JSON,
					query: String!,
					out: String,
					timeout: Int,
    			verbose: Boolean = false
					format: OverpassResponseFormat = JSON,
					endpoint: URL
				): OverpassResponse
			}

			type OverpassResponse {
				"generic OSM element, Overpass specific"
				elements: [Element!]
				nodes: [Node!],
				ways: [Way!],
				relations: [Relation!],
				areas: [Area!],
				timelines: [Timeline!],
				_raw: JSON @deprecated(reason: "This field is for debugging only. Do not use in production.")
			}

			scalar OverpassElement
		`,
	],
	resolvers
});

function buildQuery(options: QueryOverpassArgs) {
	const { query, bbox, out, format } = options;
	let headers: string[] = [];

	headers.push(`[out:${format?.toLowerCase() ?? 'json'}]`);
	if ( options.timeout ) {
		headers.push(`[timeout:${options.timeout}]`);
	}
	if (bbox) {
		headers.push(`[bbox:${formatBBox(bbox)}]`);
	}

	return `${headers.join('')};${query}; out ${out || ''};`.replace(/;;+/g, ';');
}

// https://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL#Global_bounding_box_.28bbox.29
function formatBBox(bbox: BBox | string | number[]) {
	// when bbox is string, directly return it
	if (typeof bbox === "string") {
		return bbox;
	}
	// when bbox is array, build [bbox[0],bbox[1],bbox[2],bbox[3]]
	if (Array.isArray(bbox)) {
		return bbox.join(",");
	}
	// otherwise, build south,west,north,east
	return [bbox.south, bbox.west, bbox.north, bbox.east].join(",");
}

function ucfirst(type: string) {
	return type.charAt(0).toUpperCase() + type.slice(1);
}

