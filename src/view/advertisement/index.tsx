import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn} from "components";
import AdvertisementCard from "./component/AdvertisementCard";
import {useAdvertisementData} from "./context/AdvertisementDataProvider";
import {IGetAdDataAdsItems} from "types/interfaceAd";
import Link from "next/link";

const Advertisement = () => {
  const router = useRouter();
  const {data, isLoading} = useAdvertisementData();

  const body = () => {
    return data?.map((item: IGetAdDataAdsItems) => (
      <Link key={item.id} href={`/advertisement/${item.id}`}>
        <AdvertisementCard
          title={item.title}
          image={item.main_img}
          description={item.description}
          updateTime={item.updated_at}
        />
      </Link>
    ));
  };

  return (
    <>
      <AppHeader
        body={<h1 className="font-bold ml-6">آگهی ها</h1>}
        right={<AppHeaderBackBtn onClick={() => router.back()} />}
      />
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.length ? <div>موردی یافت نشد</div> : null}
      {data?.length ? body() : null}
    </>
  );
};

export default Advertisement;
