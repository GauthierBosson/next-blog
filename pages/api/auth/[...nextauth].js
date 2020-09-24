import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      domain: process.env.COGNITO_DOMAIN
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entityPrefix: 'nextauth_'
  }
}

export default (req, res) => NextAuth(req, res, options)