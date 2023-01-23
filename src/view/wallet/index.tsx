import WalletAppHeader from "components/appHeader/component/WalletAppHeader";
import {WalletTabRoute} from "components";

function Wallet() {
  return (
    <>
      <WalletAppHeader />
      <WalletTabRoute active="wallet" />
    </>
  );
}

export default Wallet;
