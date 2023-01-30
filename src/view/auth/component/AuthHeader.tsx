import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn} from "components";

interface ILoginHeader {
  title?: string;
}

function AuthHeader({title}: ILoginHeader) {
  const router = useRouter();

  return <AppHeader right={<AppHeaderBackBtn onClick={() => router.back()} />} body={title} />;
}

export default AuthHeader;
