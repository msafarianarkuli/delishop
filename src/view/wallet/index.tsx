import WalletAppHeader from "components/appHeader/component/WalletAppHeader";
import {WalletTabRoute} from "components";
import WalletCard from "view/wallet/component/walletCard/WalletCard";

function Wallet() {
  return (
    <>
      <WalletAppHeader />
      <WalletTabRoute active="wallet" />
      <div className="px-screenSpace mt-[132px]">
        <WalletCard />
      </div>
    </>
  );
}

export default Wallet;
