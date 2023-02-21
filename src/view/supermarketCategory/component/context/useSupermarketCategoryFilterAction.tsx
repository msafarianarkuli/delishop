import {useContext} from "react";
import {SupermarketCategoryFilterAction} from "view/supermarketCategory/component/context/SupermarketCategoryFilterProvider";

function useSupermarketCategoryFilterAction() {
  return useContext(SupermarketCategoryFilterAction);
}

export default useSupermarketCategoryFilterAction;
