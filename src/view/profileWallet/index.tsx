import ProfileWalletAppHeader from "components/appHeader/component/ProfileWalletAppHeader";
import {ProfileWalletTabRoute} from "components";
import ProfileWalletCard from "view/profileWallet/component/profileWalletCard/ProfileWalletCard";
import ProfileWalletChargeWalletProvider from "view/profileWallet/context/ProfileWalletChargeWalletProvider";
import ProfileWalletCoupon from "view/profileWallet/component/ProfileWalletCoupon";

function ProfileWallet() {
  return (
    <ProfileWalletChargeWalletProvider>
      <ProfileWalletAppHeader />
      <ProfileWalletTabRoute active="wallet" />
      <div className="px-screenSpace mt-[132px]">
        <ProfileWalletCard />
        {/*<ProfileWalletCoinCard />*/}
        <ProfileWalletCoupon />
      </div>
    </ProfileWalletChargeWalletProvider>
  );
}

export default ProfileWallet;
