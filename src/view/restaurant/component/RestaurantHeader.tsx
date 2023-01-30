import {AppHeader, AppHeaderCoin, AppHeaderLocation, AppHeaderMenu} from "components";

function RestaurantHeader() {
  return <AppHeader right={<AppHeaderMenu />} body={<AppHeaderLocation />} left={<AppHeaderCoin coin={9610} />} />;
}

export default RestaurantHeader;
