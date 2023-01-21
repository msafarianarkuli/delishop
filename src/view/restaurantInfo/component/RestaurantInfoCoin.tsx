import {IconCoin} from "assets/icons";

function RestaurantInfoCoin() {
  return (
    <div className="flex items-center py-5 px-screenSpace text-[13px]">
      <IconCoin className="w-5 h-5 ml-2" />
      <span className="ml-1 text-primary">1800</span>
      <span> سکه ، جایزه خرید از رستورآن آریایی</span>
    </div>
  );
}

export default RestaurantInfoCoin;
