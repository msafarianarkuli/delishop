import {WalletTabRoute} from "components";
import WalletAppHeader from "components/appHeader/component/WalletAppHeader";

function AwardReceived() {
  return (
    <>
      <WalletAppHeader />
      <WalletTabRoute active="awardReceived" />
    </>
  );
}

export default AwardReceived;
