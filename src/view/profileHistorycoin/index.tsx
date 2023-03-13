import {ProfileWalletAppHeader, ProfileWalletTabRoute} from "components";
import ProfileHistoryCoinList from "view/profileHistorycoin/component/ProfileHistoryCoinList";

function ProfileHistoryCoin() {
  return (
    <>
      <ProfileWalletAppHeader />
      <ProfileWalletTabRoute active="historyCoin" />
      <ProfileHistoryCoinList />
    </>
  );
}

export default ProfileHistoryCoin;
