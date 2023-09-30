import { createModule, gql } from "graphql-modules";
const { loadFiles } = require('@graphql-tools/load-files');


export const osmBaseTypes = gql`
	scalar Datetime
	scalar JSON

	type Node {
	  id: ID!
	  version: Int
	  lat: Float!
	  lon: Float!
	  #geom: Point
	  tags: JSON
	  visible: Boolean
	  timestamp: Datetime
	  #changesetId: ID!
	  #changeset: Changeset
	  tag(key: String!): String
	  #nodeTags(first: Int, offset: Int, orderBy: [TagsOrderBy!]): [Tag!]!
	  #ways(first: Int, offset: Int, orderBy: [WaysOrderBy!], condition: WayCondition, filter: WayFilter): [Way!]!
	}

	type Way {
	  id: ID!
	  version: Int!
	  tags: JSON
	  #geom: LineString
	  nodes: [Node!]!
	  timestamp: Datetime!
	  visible: Boolean!
	  #changesetId: ID!
	  #changeset: Changeset
	  tag(key: String!): String # | [String]
	  #wayTags(first: Int, offset: Int, orderBy: [TagsOrderBy!], condition: TagCondition, filter: TagFilter): [Tag!]!
	}

	# TODO
	type Area {
	  id: ID!
	  version: Int!
	  tags: JSON
	  #geom: Polygon
	}

	# TODO: should this be an dynamic Enum generated via taginfo.openstreetmap.org?
	scalar RelationType

	type Relation {
	  id: ID!
	  version: Int!
	  type: RelationType
	  tags: JSON
		#, orderBy: [RelationMembersOrderBy!], condition: RelationMemberCondition, filter: RelationMemberFilter)
	  members(first: Int, offset: Int): [RelationMember!]!
		nodes(first: Int, offset: Int): [Node!]!
	  ways(first: Int, offset: Int): [Way!]!
	  relations(first: Int, offset: Int): [Relation!]!
	}

	union NWR = Node | Way | Relation
	enum NwrEnum {
		node
		way
		relation
	}
	interface RelationMember {
		type: NwrEnum!
		role: String
		sequenceId: Int!
		ref: NWR
	}

`;

const tag = (parent: any, { key }: { key: string }) => {
	return parent.tags[key];
}


export const osm = createModule({
	id: "osm-base",
	dirname: __dirname,
	typeDefs: [
		osmBaseTypes,
		...loadFilesSync(join(__dirname, '../../../../schema.graphql')),
		// loadFiles('../../../../schema.graphql')
	],
	resolvers: {
		Query: {
			hello: () => "world",
		},
		Node: {
			tag,
			tags: ({ tags }: any) => {
				// remove/hide obsolete tags
				if ('created_by' in tags) {
					let t = { ...tags };
					delete t.created_by;
					return t;
				}
				return tags;
			},
			geom: ({ lon, lat }: any) => {
				return {
					type: 'Point',
					coordinates: [lon, lat]
				}
			}
		},
		Way: {
			tag
		},
		GenericRelation: {
			tag
		},
	},
});
