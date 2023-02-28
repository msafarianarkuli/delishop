import {IconCoin} from "assets/icons";
import {useRestaurantInfoData} from "view/restaurantInfo/context/RestaurantInfoDataProvider";

function RestaurantInfoCoin() {
  const {data} = useRestaurantInfoData();

  return (
    <div className="flex items-center py-5 px-screenSpace text-[13px]">
      <IconCoin className="w-5 h-5 ml-2" />
      <span className="ml-1 text-primary">{data?.vendor?.point}</span>
      <span className="mx-1">سکه ، جایزه خرید از</span>
      <span>{data?.vendor?.name}</span>
    </div>
  );
}

export default RestaurantInfoCoin;
