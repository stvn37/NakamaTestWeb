import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from '../../../prisma/client'


export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials : {
        username: {label: "Username", type: "text"},
        password: {label: "Password", type: 'password'}
      },
      async authorize(credentials, req) {
        const user = await prisma.admin.findFirst({
          where: {
            username: credentials.username,
            password: credentials.password
          }
        })

        if(user) return user
        else return null
      }
    }),
    // ...add more providers here
  ],
  callbacks: {
    jwt: ({token, user}) => {
     
      if(user) {
        token.id = user.id
      }

      return token
    },
    session: ({session, token}) => {
     
      if(token) {
        session.id = token.id
      }

      return session
    }
  },
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt"
  }
});
