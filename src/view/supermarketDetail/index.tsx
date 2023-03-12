import SupermarketDetailHeader from "view/supermarketDetail/component/SupermarketDetailHeader";
import SupermarketDetailList from "view/supermarketDetail/component/SupermarketDetailList";
import {BottomNavigation, BottomPageGradient} from "components";
import useSupermarketNavigation from "hooks/useSupermarketNavigation";
import SupermarketDetailSummary from "view/supermarketDetail/component/SupermarketDetailSummary";

function SupermarketDetail() {
  const data = useSupermarketNavigation();

  return (
    <>
      <SupermarketDetailHeader />
      <div className="mt-headerNormal px-screenSpace">
        <SupermarketDetailSummary />
      </div>
      <SupermarketDetailList />
      <BottomPageGradient />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation primary="supermarket" data={data} />
    </>
  );
}

export default SupermarketDetail;
