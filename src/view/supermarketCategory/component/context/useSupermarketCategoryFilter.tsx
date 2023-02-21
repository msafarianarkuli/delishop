import {useContext} from "react";
import {SupermarketCategoryFilterContext} from "view/supermarketCategory/component/context/SupermarketCategoryFilterProvider";

function useSupermarketCategoryFilter() {
  return useContext(SupermarketCategoryFilterContext);
}

export default useSupermarketCategoryFilter;
