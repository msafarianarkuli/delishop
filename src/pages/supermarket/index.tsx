import SuperMarket from "view/supermarket";
import SuperMarketDataProvider from "view/supermarket/context/SuperMarketDataProvider";
import LogisticPriceProvider from "context/LogisticPriceProvider";

function SuperMarketPage() {
  return (
    <SuperMarketDataProvider>
      <LogisticPriceProvider>
        <SuperMarket />
      </LogisticPriceProvider>
    </SuperMarketDataProvider>
  );
}

export default SuperMarketPage;
