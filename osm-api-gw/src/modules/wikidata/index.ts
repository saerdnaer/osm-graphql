import { stitchSchemas } from "@graphql-tools/stitch";
import { IResolvers } from "@graphql-tools/utils";
import gql from "graphql-tag";
import wikimediaSubschema from "./subschema";
import { cleanupValue } from "./utils";

const typeDefs = gql`
	scalar JSON
	scalar Datetime
	type Query {
		hello: String!
	}
	extend type Entity {
		name: String
	}
	extend type Claim {
		key: String
		datatype: String # TODO Enum?
		value: JSON
		qualifiers2: JSON
	}
	extend type Snak {
		key: String
		value: JSON
	}
	extend interface SnakValue {
		raw: JSON
	}
	extend type SnakValueString {
		raw: JSON
	}
	extend type SnakValueEntity {
		raw: JSON
	}
	extend type SnakValuePage {
		raw: JSON
	}
	extend type SnakValueGlobeCoordinate {
		raw: JSON
		latitude: Float
		longitude: Float
		precision: Float
		globe: Entity
	}
	extend type SnakValueGlobeCoordinateValue {
		raw: JSON
	}
	extend type SnakValueMonolingualText {
		raw: JSON
	}
	extend type SnakValueMonolingualTextValue {
		raw: JSON
	}
	extend type SnakValueQuantity {
		raw: JSON
	}
	extend type SnakValueQuantityValue {
		raw: JSON
	}
	extend type SnakValueTime {
		raw: JSON
		time: Datetime
		precision: Int
		before: Int
		after: Int
		calendarmodel: Entity
	}
`;

const resolvers: IResolvers = {
	Query: {
		hello: () => "Hello World!",
	},
	Entity: {
		name: {
			selectionSet: `{ label { value } }`,
			resolve: (x) => x?.label?.value,
		},
	},
	Claim: {
		key: {
			selectionSet: `{ mainsnak { property { label { value } } } }`,
			resolve: ({ mainsnak }) => mainsnak?.property?.label?.value,
		},
		datatype: {
			selectionSet: `{ mainsnak { datatype } }`,
			resolve: ({ mainsnak }) => mainsnak?.datatype,
		},
		value: {
			selectionSet: `{ mainsnak { datavalue { raw
        ... on SnakValueString { raw: value }
        ... on SnakValuePage { value { title } }
        ... on SnakValueGlobeCoordinate { value { latitude, longitude, precision } }
        ... on SnakValueMonolingualText { value { text, language } }
        ... on SnakValueQuantity { value { amount } }
        ... on SnakValueTime { value { time, timezone } }
      } } }`,
			resolve: ({ mainsnak }) => cleanupValue(mainsnak?.datavalue?.raw || mainsnak?.datavalue?.value),
		},
		/* This would require a second stitching layer...
		qualifiers2: {
			selectionSet: `{ qualifiers { key, value } }`,
			resolve: ({ qualifiers }) => qualifiers.reduce((acc: Object, [key, value]: any) => ({ ...acc, [key]: value }), {}),
		}, */
	},
	Snak: {
		key: {
			selectionSet: `{ property { label { value } } }`,
			resolve: ({ property }) => property?.label?.value,
		},
		value: {
			selectionSet: `{ datavalue { raw
          ... on SnakValueString { raw: value }
          ... on SnakValuePage { value { title } }
          ... on SnakValueGlobeCoordinate { value { latitude, longitude, precision } }
          ... on SnakValueMonolingualText { value { text, language } }
          ... on SnakValueQuantity { value { amount } }
          ... on SnakValueTime { value { time } }
      } }`,
			resolve: ({ datavalue }) => cleanupValue(datavalue?.raw || datavalue?.value),
		},
	} /*
	SnakValue: {
		raw: {
			selectionSet: `{
        ... on SnakValueString { string: value }
        ... on SnakValuePage { value { title } }
        ... on SnakValueGlobeCoordinate { value { latitude, longitude, precision } }
        ... on SnakValueMonolingualText { value { text, language } }
        ... on SnakValueQuantity { value { amount } }
        ... on SnakValueTime { value { time } }
      }`, // SnakValueQuantity { value { amount, unit { label {value} }
		},
	},*/,
	SnakValueString: {
		raw: {
			selectionSet: `{ string: value }`,
			resolve: (x) => x?.string,
		},
	},
	SnakValueEntity: {
		raw: {
			selectionSet: `{ value { id, name, label { value } } }`,
			resolve: (x) => x?.value,
		},
	},
	SnakValuePage: {
		raw: {
			selectionSet: `{ value { title } }`,
			resolve: (x) => x.value,
		},
	},
	SnakValueGlobeCoordinate: {
		raw: {
			selectionSet: `{ value { latitude, longitude, precision } }`,
			resolve: (x) => x.value,
		},
		latitude: (x) => x?.value?.latitude,
		longitude: (x) => x?.value?.longitude,
		precision: (x) => x?.value?.precision,
		globe: (x) => x?.value?.globe,
	},
	SnakValueMonolingualText: {
		raw: {
			selectionSet: `{ value { text, language } }`,
			resolve: (x) => x?.value?.text,
		},
	},
	SnakValueQuantity: {
		raw: {
			selectionSet: `{ value { amount } }`,
			resolve: ({ value }) => `${value?.amount} ${value?.unit}`, // TODO unit
		},
	},
	SnakValueTime: {
		value: ({ value }) => {
			return value;
		},
		raw: {
			selectionSet: `{ value { time } }`,
			resolve: (x) => x?.value?.time,
		},
	},
	SnakValueTimeValue: {
		time: ({ time }) => "",
	},
};
export const buildSchema = async () => {
	const wikimedia = await wikimediaSubschema();

	const schema = stitchSchemas({
		subschemas: [wikimedia!],
		typeDefs,
		resolvers,
	});

	return schema;
};
