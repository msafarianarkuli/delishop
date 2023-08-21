import {useRouter} from "next/router";

import {AppHeader, AppHeaderBackBtn} from "components";
import AdvertisementSlider from "./components/AdvertisementSlider";
import AdvertisementInfo from "./components/AdvertisementInfo";

const AdvertisementDetail = () => {
  const router = useRouter();
  return (
    <>
      <AppHeader
        body={<h1 className="font-bold ml-6">آگهی ها</h1>}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
      <AdvertisementSlider />
      <AdvertisementInfo />
    </>
  );
};

export default AdvertisementDetail;
