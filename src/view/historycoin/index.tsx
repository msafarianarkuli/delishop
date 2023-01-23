import WalletAppHeader from "components/appHeader/component/WalletAppHeader";
import {WalletTabRoute} from "components";

function HistoryCoin() {
  return (
    <>
      <WalletAppHeader />
      <WalletTabRoute active="historyCoin" />
    </>
  );
}

export default HistoryCoin;
