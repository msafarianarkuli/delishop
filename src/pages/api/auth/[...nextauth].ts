import NextAuth, {NextAuthOptions, Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";
import {User} from "types/interfaces";

type sessionToken = JWT & User;

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const {phoneNumber, code} = credentials as {phoneNumber: string; code: string};
        console.log("credentials", phoneNumber, code);
        // console.log('req',req)
        // Add logic here to look up the user from the credentials supplied
        const user = {
          id: new Date().getTime().toString(),
          name: "محمد صادق",
          phoneNumber: phoneNumber,
          token: "token",
          userName: "mskarimi",
        };
        return user;
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;
        //
        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      // console.log("jwt token", token);
      // console.log("jwt user", user);
      return {...token, ...user};
    },
    async session({session, token}: {session: Session; token: sessionToken}) {
      // console.log("session session", session);
      // console.log("session token", token);
      // console.log("session user", user);
      session.user = {
        name: token.name,
        phoneNumber: token.phoneNumber,
        userName: token.userName,
        token: token.token,
      };
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
    signOut: "/",
  },
};

export default NextAuth(authOptions);
