import {useMemo} from "react";
import {useSession} from "next-auth/react";

interface IUsePrivateLink {
  link: string;
}

function usePrivateLink({link}: IUsePrivateLink) {
  const {status} = useSession();

  return useMemo(() => {
    if (status === "authenticated") {
      return link;
    }
    return `/auth?callbackUrl=${encodeURI(link)}`;
  }, [link, status]);
}

export default usePrivateLink;
