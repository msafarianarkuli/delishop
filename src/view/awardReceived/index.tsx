import {WalletTabRoute} from "components";
import WalletAppHeader from "components/appHeader/component/WalletAppHeader";
import AwardReceivedCard from "view/awardReceived/component/AwardReceivedCard";

function AwardReceived() {
  return (
    <>
      <WalletAppHeader />
      <WalletTabRoute active="awardReceived" />
      <div className="px-screenSpace mt-[132px]">
        <AwardReceivedCard />
      </div>
    </>
  );
}

export default AwardReceived;
