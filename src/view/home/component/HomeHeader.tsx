import {AppHeader, AppHeaderLogo, AppHeaderLocation, AppHeaderMenu} from "components";

function HomeHeader() {
  return (
    <div className="fixed z-10 top-0 right-0 left-0 bg-[#F1F1F6]">
      <AppHeader right={<AppHeaderMenu />} body={<AppHeaderLocation />} left={<AppHeaderLogo />} />
    </div>
  );
}

export default HomeHeader;
