import HomeAuthenticated from "./component/homeStatus/HomeAuthenticated";
import HomeUnauthenticated from "./component/homeStatus/HomeUnauthenticated";
// import HomeLoading from "./component/homeStatus/HomeLoading";

import {IBlog} from "types/interfaceBlog";
import {useSession} from "next-auth/react";
import {useGuest} from "template/context/GuestProvider";
import {useEffect, useState} from "react";

interface IHome {
  blogs: IBlog[];
}

function Home(props: IHome) {
  const {blogs} = props;
  const {status} = useSession();
  const {isGuest} = useGuest();

  const [guest, setGuest] = useState<string | null>(null);

  useEffect(() => {
    const isGuest = localStorage.getItem("isGuest");
    setGuest(isGuest);
  }, []);

  return isGuest || guest || status === "authenticated" ? (
    <HomeAuthenticated blogs={blogs} />
  ) : status === "unauthenticated" ? (
    <HomeUnauthenticated />
  ) : null;
}

export default Home;
