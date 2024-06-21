import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth/next";

import { use } from "react";
import { SessionUser } from "@/app/lib/types";

export const authOptions: AuthOptions = {
  
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "User Name",
          type: "text",
          placeholder: "Your User Name",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const checkUser = () => {
            if (credentials?.username === 'test' && credentials?.password === 'test')
                return { id: 'dkf', firstName: 'J', lastName: 'Smith', role: 'ADMIN', emailVarified: '', email: 'jsmith@example.com', password: 'test'}
            else return null
        }
        const user = checkUser();
        if (!user) throw new Error("User name or password is not correct");
        const { password, ...userWithoutPass } = user;
        return userWithoutPass as SessionUser;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user as SessionUser
      return token;
    },

    async session({ token, session }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
