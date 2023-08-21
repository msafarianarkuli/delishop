import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn} from "components";
import SupportApps from "./components/SupportApps";
import SupportDetail from "./components/SupportDetail";

const Support = () => {
  const router = useRouter();
  return (
    <>
      <AppHeader
        body={<h1 className="font-bold ml-6">پشتیبانی</h1>}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
      <SupportDetail />
      <SupportApps />
    </>
  );
};

export default Support;
