import SupermarketCategoryHeader from "view/supermarketCategory/component/SupermarketCategoryHeader";
import SupermarketCategoryList from "view/supermarketCategory/component/SupermarketCategoryList";
import {BottomNavigation, BottomPageGradient} from "components";
import useSupermarketNavigation from "hooks/useSupermarketNavigation";

function SupermarketCategory() {
  const data = useSupermarketNavigation();

  return (
    <>
      <SupermarketCategoryHeader />
      <SupermarketCategoryList />
      <BottomPageGradient />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation primary="supermarket" data={data} />
    </>
  );
}

export default SupermarketCategory;
