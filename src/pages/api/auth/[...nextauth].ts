import NextAuth, {NextAuthOptions, Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";
import {IUser} from "types/interfaces";
import {NextApiRequest, NextApiResponse} from "next";
import verifyCode from "api/verifyCode";

type sessionToken = JWT & IUser;

export const authOptions = (req: NextApiRequest): NextAuthOptions => ({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        const {phone, code} = credentials as {phone: string; code: string};
        console.log("credentials", phone, code);
        const body = {
          code,
          phone,
        };
        try {
          const res = await verifyCode({
            isServer: true,
            body,
          });
          const {auth, user} = res;
          const data: IUser = {
            useId: user.id,
            name: user.name,
            phone: user.phone,
            birthday: user.birthday,
            invite_token: user.invite_token,
            age_level: user.age_level,
            gender: user.gender,
            anniversary_date: user.anniversary_date,
            token: auth.token,
            expires_at: auth.expires_at,
            email: user.email,
          };
          return {
            id: user.id.toString(),
            ...data,
          };
          // } catch (e: unknown) {
        } catch (e: any) {
          console.log("error", e);
          let message = e?.data?.message || "";
          // if (e instanceof AxiosError && e.response) {
          //   const data = e.response.data;
          //   message = data?.message;
          //   console.log("message", message);
          // }
          throw new Error(message);
          // return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      // console.log("jwt token", token);
      // console.log("jwt user", user);
      const name = req.query?.name;
      const birthday = req.query?.birthday;
      const gender = req.query?.gender;
      const anniversary_date = req.query?.anniversary;
      const email = req.query?.email;
      if (name && !Array.isArray(name)) {
        token.name = decodeURI(name);
      }
      if (email && !Array.isArray(email)) {
        token.email = decodeURI(email);
      }
      if (birthday && !Array.isArray(birthday)) {
        token.birthday = decodeURI(birthday);
      }
      if (gender && !Array.isArray(gender)) {
        token.gender = decodeURI(gender);
      }
      if (anniversary_date && !Array.isArray(anniversary_date)) {
        token.anniversary_date = decodeURI(anniversary_date);
      }
      return {...token, ...user};
    },
    async session({session, token}: {session: Session; token: sessionToken}) {
      // console.log("session session", session);
      // console.log("session token", token);
      // console.log("session user", user);
      session.user = {
        useId: token.useId,
        name: token.name,
        phone: token.phone,
        token: token.token,
        birthday: token.birthday,
        invite_token: token.invite_token,
        age_level: token.age_level,
        gender: token.gender,
        anniversary_date: token.anniversary_date,
        email: token.email,
      };
      const month = 30 * 24 * 3600 * 1000;
      const expires = new Date().getTime() + month;
      session.expires = token.expires_at || new Date(expires).toISOString();
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
  secret: process.env.NEXTAUTH_SECRET,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions(req));
};

export default handler;
