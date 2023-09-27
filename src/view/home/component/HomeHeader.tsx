import {AppHeader, AppHeaderLogo, AppHeaderLocation, AppHeaderMenu} from "components";

function HomeHeader() {
  return (
    <div className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader right={<AppHeaderMenu />} body={<AppHeaderLocation />} left={<AppHeaderLogo />} />
    </div>
  );
}

export default HomeHeader;
