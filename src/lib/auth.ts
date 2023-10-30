import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

declare module 'next-auth' {
  /**
   * The session object.
   */
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Session {
    /**
     * The user object.
     */
    user: {
      /**
       * The user's id.
       */
      id: string
      /**
       * The user's email.
       */
      email: string
      /**
       * The user's name.
       */
      name: string | null
      /**
       * The user's picture.
       */
      picture: string | null
    }
  }
}

export const config: NextAuthConfig = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_CLIENT_KEY as string,
      clientSecret: process.env.OAUTH_CLIENT_SECRET as string
    })
  ],

  session: {
    strategy: 'jwt'
  }
}

const handler = NextAuth(config)
export { handler as GET, handler as POST }
