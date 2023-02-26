import { makeExecutableSchema } from '@graphql-tools/schema'
import { loadFiles } from '@graphql-tools/load-files'

const resolvers = {
  Query: {
    hello: () => 'Hello World!',
  },
}

export const buildSchema = async () => makeExecutableSchema({
  typeDefs: await loadFiles(['../schema.graphql', 'src/typeDefs/**/*.graphql']),
  resolvers: await loadFiles('src/resolvers/**/*.ts'),
})