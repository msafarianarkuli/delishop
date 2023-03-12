import SuperMarket from "view/supermarket";
import SuperMarketDataProvider from "view/supermarket/context/SuperMarketDataProvider";

function SuperMarketPage() {
  return (
    <SuperMarketDataProvider>
      <SuperMarket />
    </SuperMarketDataProvider>
  );
}

export default SuperMarketPage;
