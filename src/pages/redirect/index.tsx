import {useSession} from "next-auth/react";
import {useEffect} from "react";

const RedirectPage = () => {
  const {data: session} = useSession();

  useEffect(() => {
    const url = localStorage.getItem("redirectUrl");
    location.replace(`${url}?token=${session?.user.token}&userId=${session?.user.useId}`);
  }, []);

  return <div className="bg-[#000] h-screen w-screen"></div>;
};

export default RedirectPage;
