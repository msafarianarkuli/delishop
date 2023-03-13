import SupermarketCategoryHeader from "view/supermarketCategory/component/SupermarketCategoryHeader";
import SupermarketCategoryProductsList from "view/supermarketCategory/component/SupermarketCategoryProductsList";
import {BottomNavigation, BottomPageGradient} from "components";
import useSupermarketNavigation from "hooks/useSupermarketNavigation";
import SupermarketCategoryFilter from "view/supermarketCategory/component/supermarketCategoryFilter";
import SupermarketCategoryFilterProvider from "view/supermarketCategory/component/context/SupermarketCategoryFilterProvider";
import SupermarketCategorySubCategory from "view/supermarketCategory/component/SupermarketCategorySubCategory";

function SupermarketCategory() {
  const data = useSupermarketNavigation();

  return (
    <SupermarketCategoryFilterProvider>
      <SupermarketCategoryHeader />
      <div className="mt-headerNormal">
        <SupermarketCategorySubCategory />
        <SupermarketCategoryProductsList />
      </div>
      <SupermarketCategoryFilter />
      <BottomPageGradient />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation primary="supermarket" data={data} />
    </SupermarketCategoryFilterProvider>
  );
}

export default SupermarketCategory;
