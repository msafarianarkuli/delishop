import {ProfileWalletTabRoute} from "components";
import ProfileWalletCard from "view/profileWallet/component/profileWalletCard/ProfileWalletCard";
import ProfileWalletChargeWalletProvider from "view/profileWallet/context/ProfileWalletChargeWalletProvider";
import ProfileWalletCoupon from "view/profileWallet/component/ProfileWalletCoupon";
import HomeHeader from "view/home/component/HomeHeader";
import ProfileMainTabRoute from "components/appTabRoute/component/profileMainTabRoute/ProfileMainTabRoute";

function ProfileWallet() {
  return (
    <ProfileWalletChargeWalletProvider>
      <HomeHeader />
      <ProfileMainTabRoute active="historycoin" />
      <ProfileWalletTabRoute active="wallet" />
      <div className="px-screenSpace mt-[250px]">
        <ProfileWalletCard />
        {/*<ProfileWalletCoinCard />*/}
        <ProfileWalletCoupon />
      </div>
    </ProfileWalletChargeWalletProvider>
  );
}

export default ProfileWallet;
