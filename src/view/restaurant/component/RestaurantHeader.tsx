import {AppHeader, AppHeaderCoin} from "components";
import {IconArrowDown, IconMenu} from "assets/icons";

function RestaurantHeaderBody() {
  return (
    <div className="text-[14px]">
      <div className="flex items-center justify-center">
        <span className="font-bold">خانه</span>
        <IconArrowDown className="w-3 h-auto text-iconColor mr-1" />
      </div>
      <div className="text-[13px] font-light max-w-[130px] truncate">کشاورز، پارک لاله، کارگر جنوبی</div>
    </div>
  );
}

function RestaurantHeaderRight() {
  return (
    <button>
      <IconMenu className="w-7 h-auto" />
    </button>
  );
}

function RestaurantHeader() {
  return (
    <AppHeader right={<RestaurantHeaderRight />} body={<RestaurantHeaderBody />} left={<AppHeaderCoin coin={9610} />} />
  );
}

export default RestaurantHeader;
