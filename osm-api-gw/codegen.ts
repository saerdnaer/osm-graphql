import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	// documents: ["src/modules/*.ts"],
	generates: {
		"src/generated/graphql.ts": {
      schema: "../schema.graphql",
			plugins: ["typescript", "typescript-resolvers"],
		},
		//"./graphql.schema.json": {
		//	plugins: ["introspection"],
		//},
		"src/modules/generated": {
			schema: "./src/modules/**/index.ts",
			// './src/modules/**/typedefs/*.graphql',
			preset: "graphql-modules",
			presetConfig: {
				baseTypesPath: "graphql.ts",
				filename: "modules",
			},
			plugins: [
				{
					add: {
						content: "/* eslint-disable */",
					},
				},
				"typescript",
				"typescript-resolvers",
			],
		},
	},
};

export default config;
