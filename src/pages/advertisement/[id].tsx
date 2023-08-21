import AdvertisementDataProvider from "view/advertisement/context/AdvertisementDataProvider";
import AdvertisementDetail from "view/advertisementDetail";

const advertisementDetailPage = () => {
  return (
    <AdvertisementDataProvider>
      <AdvertisementDetail />
    </AdvertisementDataProvider>
  );
};

export default advertisementDetailPage;
