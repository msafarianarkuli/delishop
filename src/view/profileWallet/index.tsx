import ProfileWalletAppHeader from "components/appHeader/component/ProfileWalletAppHeader";
import {ProfileWalletTabRoute} from "components";
import ProfileWalletCard from "view/profileWallet/component/profileWalletCard/ProfileWalletCard";
import ProfileWalletCoinCard from "view/profileWallet/component/profileWalletCoinCard/ProfileWalletCoinCard";
import ProfileWalletChargeWalletProvider from "view/profileWallet/context/ProfileWalletChargeWalletProvider";

function ProfileWallet() {
  return (
    <ProfileWalletChargeWalletProvider>
      <ProfileWalletAppHeader />
      <ProfileWalletTabRoute active="wallet" />
      <div className="px-screenSpace mt-[132px]">
        <ProfileWalletCard />
        <ProfileWalletCoinCard />
      </div>
    </ProfileWalletChargeWalletProvider>
  );
}

export default ProfileWallet;
