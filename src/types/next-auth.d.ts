import {User} from "types/interfaces";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
