import {useRouter} from "next/router";

import {AppHeader, AppHeaderBackBtn} from "components";
import AdvertisementSlider from "./components/AdvertisementSlider";
import AdvertisementInfo from "./components/AdvertisementInfo";
import {useAdvertisementData} from "view/advertisement/context/AdvertisementDataProvider";
import {IGetAdDataAdsItems} from "types/interfaceAd";

const AdvertisementDetail = () => {
  const router = useRouter();
  const advertisementId = router.query.id;
  const {data, isLoading} = useAdvertisementData();
  const info = data?.find((item: IGetAdDataAdsItems) => item.id === Number(advertisementId));

  return (
    <>
      <AppHeader
        body={<h1 className="font-bold ml-6">آگهی ها</h1>}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
      {isLoading ? <div>loading ...</div> : null}
      {info ? (
        <>
          <AdvertisementSlider data={info} />
          <AdvertisementInfo
            title={info?.title}
            price={info?.price}
            status={info?.status}
            description={info?.description}
            contact={info?.contact}
            link={info?.link}
          />
        </>
      ) : null}
    </>
  );
};

export default AdvertisementDetail;
