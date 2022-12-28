import type { User} from "next-auth";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "../../../server/db/client";
import { Authentication } from "../../../server/usecases/AuthenticateUser/AuthenticateUser";
import { AuthenticationResult } from "../../../server/usecases/AuthenticateUser/ports/AuthenticateUserDefs";
import { PrismaAttendantRepository } from "../../../server/infra/PrismaRepositories/PrismaAttendantRepository/PrismaAttendantRepository";
import { BcryptPasswordEncoder } from "../../../server/infra/PasswordEncoder/BcryptPasswordEncoder";
import { Attendant } from "../../../server/entities/Attendant/Attendant";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  pages: {
    signIn: '/auth/signin'
  },
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    jwt({user, token}) {
      // console.log(user)
      
      if(user?.id) token = {...token, user: {...user}}
       
      return token
      
    },
    session({ session, token }) {
      const user = token.user as {id: string, name: string, image: string }
      // console.log(user)
      if (session.user) {
        session.user= user
      }
      return session
    },
  },
  // Configure one or more authentication providers
  // adapter: PrismaAdapter(prisma),
  
  providers: [
    CredentialsProvider({
    name: 'credentials',
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: {  label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const {username, password} = credentials as {username: string, password: string}
      const authenticateUser = new Authentication(new PrismaAttendantRepository(), new BcryptPasswordEncoder())
      const response = await authenticateUser.handle({username, password})
      
      if(response instanceof Error) {
        throw new Error(response.message)
      }
      const attendant = response.attendant!
      const user: User = {id: attendant.id, name: attendant.fullname, image: attendant.image}
      return user
      // console.log(user)
      
      // return {id: '1234', name: 'jean simas', image: 'testeImage'}
    }
    }),
    // ...add more providers here
  ],

};

export default NextAuth(authOptions);
