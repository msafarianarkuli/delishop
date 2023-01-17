import BackBtn from "components/backBtn/BackBtn";
import {useRouter} from "next/router";
import {AppHeader} from "components";

interface ILoginHeader {
  title?: string;
}

function AuthHeader({title}: ILoginHeader) {
  const router = useRouter();

  return <AppHeader right={<BackBtn onClick={() => router.back()} />} body={title} />;
}

export default AuthHeader;
