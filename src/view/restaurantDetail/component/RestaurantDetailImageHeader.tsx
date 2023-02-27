import {useRestaurantDetailData} from "view/restaurantDetail/context/RestaurantDetailDataProvider";

function RestaurantDetailImageHeader() {
  const {data} = useRestaurantDetailData();

  return (
    <div className="relative w-full pb-[45.6%]">
      <img
        src={data?.vendor?.banner || ""}
        alt={data?.vendor?.name}
        className="absolute inset-0 w-full h-full object-center object-cover"
      />
    </div>
  );
}

export default RestaurantDetailImageHeader;
