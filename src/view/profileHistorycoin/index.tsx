import {ProfileWalletTabRoute} from "components";
import ProfileMainTabRoute from "components/appTabRoute/component/profileMainTabRoute/ProfileMainTabRoute";
import HomeHeader from "view/home/component/HomeHeader";
import ProfileHistoryCoinList from "view/profileHistorycoin/component/ProfileHistoryCoinList";

function ProfileHistoryCoin() {
  return (
    <>
      <HomeHeader />
      <ProfileMainTabRoute active="historycoin" />
      <ProfileWalletTabRoute active="history" />
      <ProfileHistoryCoinList />
    </>
  );
}

export default ProfileHistoryCoin;
