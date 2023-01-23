import WalletAppHeader from "components/appHeader/component/WalletAppHeader";
import {WalletTabRoute} from "components";
import WalletCard from "view/wallet/component/walletCard/WalletCard";
import CoinCard from "view/wallet/component/coinCard/CoinCard";

function Wallet() {
  return (
    <>
      <WalletAppHeader />
      <WalletTabRoute active="wallet" />
      <div className="px-screenSpace mt-[132px]">
        <WalletCard />
        <CoinCard />
      </div>
    </>
  );
}

export default Wallet;
