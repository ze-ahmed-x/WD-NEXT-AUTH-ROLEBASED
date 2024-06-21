
import NextAuth, { DefaultSession } from "next-auth"

import NextAuth, { DefaultSession } from "next-auth"


export type SessionUser = {
    id: string;
    email: string
    firstName: string
    lastName: string
    role: string 
    emailVarified: DateTime?
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    // user: SessionUser & DefaultSession["user"]
    user: SessionUser
  }
}

declare module "next-auth/jwt" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface JWT {
      user: SessionUser
    }
  }

