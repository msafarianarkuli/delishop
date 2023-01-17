import {AppHeader} from "components";
import {IconArrowDown, IconCoin, IconMenu} from "assets/icons";
import styles from "view/restaurant/restaurant.module.scss";

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

function RestaurantHeaderLeft() {
  return (
    <div className={styles.restaurant_header_left}>
      <IconCoin className="w-5 h-5" />
      <div className="font-medium mx-2">9610</div>
      <div className="text-[13px] font-light">سکه</div>
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
    <AppHeader right={<RestaurantHeaderRight />} body={<RestaurantHeaderBody />} left={<RestaurantHeaderLeft />} />
  );
}

export default RestaurantHeader;
