import {WalletAppHeader, WalletTabRoute} from "components";
import HistoryCoinCard from "view/historycoin/component/historyCoinCard/HistoryCoinCard";

const arr = Array.from(new Array(20), (_, i) => i + 1);

function HistoryCoin() {
  return (
    <>
      <WalletAppHeader />
      <WalletTabRoute active="historyCoin" />
      <div className="px-screenSpace mt-[132px]">
        {arr.map((item) => {
          return (
            <HistoryCoinCard
              key={item}
              coin={750}
              time="18:27"
              date="1401/04/04"
              status="دریافتی"
              description="سفارش غذا از رستوران آریایی"
            />
          );
        })}
      </div>
    </>
  );
}

export default HistoryCoin;
