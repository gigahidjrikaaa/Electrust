import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // Configure your own login provider
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session(session, token) {
      session.user.role = token.role;
      return session;
    },
  },
});
