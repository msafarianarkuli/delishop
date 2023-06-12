import {AppHeader, AppHeaderCoin, AppHeaderLocation, AppHeaderMenu} from "components";

function VendorHeader() {
  return <AppHeader right={<AppHeaderMenu />} body={<AppHeaderLocation />} left={<AppHeaderCoin />} />;
}

export default VendorHeader;
