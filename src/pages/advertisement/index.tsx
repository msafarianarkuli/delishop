import Advertisement from "view/advertisement";
import AdvertisementDataProvider from "view/advertisement/context/AdvertisementDataProvider";

const AdvertisementListPage = () => {
  return (
    <AdvertisementDataProvider>
      <Advertisement />
    </AdvertisementDataProvider>
  );
};

export default AdvertisementListPage;
