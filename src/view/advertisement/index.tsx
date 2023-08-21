import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn} from "components";
import AdvertisementCard from "./component/AdvertisementCard";
import {useAdvertisementData} from "./context/AdvertisementDataProvider";

const Advertisement = () => {
  const router = useRouter();
  const data = useAdvertisementData();
  console.log("first", data);
  return (
    <>
      <AppHeader
        body={<h1 className="font-bold ml-6">آگهی ها</h1>}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
      <AdvertisementCard />
    </>
  );
};

export default Advertisement;
