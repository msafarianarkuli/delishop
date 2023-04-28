import NextAuth, {AuthOptions, Session} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {JWT} from "next-auth/jwt";
import {IUser} from "types/interfaces";
import verifyCode from "api/verifyCode";

type sessionToken = JWT & IUser;

// export const authOptions = (req: NextApiRequest): NextAuthOptions => ({
export const authOptions: AuthOptions = {
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
    async jwt({token, user, trigger, session}) {
      // console.log("jwt token", token);
      // console.log("jwt user", user);
      if (trigger === "update") {
        if (session?.name) {
          token.name = session.name;
        }
        if (session?.email) {
          token.email = session?.email;
        }
        if (session?.gender) {
          token.gender = session.gender;
        }
        if (session?.birthday) {
          token.birthday = session.birthday;
        }
        if (session?.anniversary_date) {
          token.anniversary_date = session.anniversary_date;
        }
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
};

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   return NextAuth(req, res, authOptions(req));
// };
//
// export default handler;

export default NextAuth(authOptions);
