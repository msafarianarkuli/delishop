import {WalletTabRoute} from "components";
import WalletAppHeader from "components/appHeader/component/WalletAppHeader";
import AwardReceivedCard from "view/awardReceived/component/AwardReceivedCard";

const arr = Array.from(new Array(10), (_, i) => i + 1);

function AwardReceived() {
  return (
    <>
      <WalletAppHeader />
      <WalletTabRoute active="awardReceived" />
      <div className="px-screenSpace mt-[132px]">
        {arr.map((item) => {
          return (
            <AwardReceivedCard
              key={item}
              title="سفارش غذا از اپلیکیشن آریایی"
              discount="NSH-RM-21"
              description="50 هزار تومان تخفیف سفارش غذا"
            />
          );
        })}
      </div>
    </>
  );
}

export default AwardReceived;
