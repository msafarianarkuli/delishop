import SupermarketCategoryHeader from "view/supermarketCategory/component/SupermarketCategoryHeader";
import SupermarketCategoryList from "view/supermarketCategory/component/SupermarketCategoryList";
import {BottomNavigation, BottomPageGradient} from "components";
import useSupermarketNavigation from "hooks/useSupermarketNavigation";
import SupermarketCategoryFilter from "view/supermarketCategory/component/supermarketCategoryFilter";
import SupermarketCategoryFilterProvider from "view/supermarketCategory/component/context/SupermarketCategoryFilterProvider";

function SupermarketCategory() {
  const data = useSupermarketNavigation();

  return (
    <SupermarketCategoryFilterProvider>
      <SupermarketCategoryHeader />
      <SupermarketCategoryList />
      <SupermarketCategoryFilter />
      <BottomPageGradient />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation primary="supermarket" data={data} />
    </SupermarketCategoryFilterProvider>
  );
}

export default SupermarketCategory;
