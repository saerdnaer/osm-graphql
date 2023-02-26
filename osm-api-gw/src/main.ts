import { createServer } from '@graphql-yoga/node'
import { buildSchema } from './schema'

async function main() {
  const server = createServer({ schema: await buildSchema() })
  await server.start()
}

main()