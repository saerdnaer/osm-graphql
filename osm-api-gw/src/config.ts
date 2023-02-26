
const config = {
  isDevelopment: process.env.NODE_ENV === 'development',
  branch: '',
  port: Number(process.env.BIND_PORT) || 4000,
  foo: 'bar',
  wikimediaApiUrl: 'https://graphql.toolforge.org'
}

export default config;