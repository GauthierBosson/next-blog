/* eslint-disable no-unused-vars */
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import db from "../../../lib/db";
import { passwordVerify } from "../../../lib/passwordHelpers";
const escape = require("sql-template-strings");

const options = {
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = credentials;
          const user = await db.query(escape`
            SELECT * FROM users WHERE email = ${email}
          `);

          if (user.length === 0) return Promise.resolve(null);

          const hashedPassword = user[0].password;

          const isPasswordValid = await passwordVerify(
            password,
            hashedPassword
          );

          if (isPasswordValid) return Promise.resolve(user[0]);

          return Promise.resolve(null);
        } catch (error) {
          console.log(error);
        }
      },
    }),
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      domain: process.env.COGNITO_DOMAIN,
    }),
  ],

  database: {
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    entityPrefix: "nextauth_",
  },

  session: {
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  pages: {
    signIn: "/auth/signin",
  },

  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.isPremium = profile.premium;
        token.stripeId = profile.stripe_id;
      }

      return Promise.resolve(token);
    },

    session: async (session, user, sessionToken) => {
      session.user.isPremium = user.isPremium;

      if (user.stripeId === null) {
        session.user.stripeId = null;
      } else {
        session.user.stripeId = user.stripeId;
      }

      return Promise.resolve(session);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
