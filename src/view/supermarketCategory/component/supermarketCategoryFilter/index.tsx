import {CustomModal} from "components";
import SupermarketCategoryFilterHeader from "view/supermarketCategory/component/supermarketCategoryFilter/SupermarketCategoryFilterHeader";
import SupermarketCategoryFilterBody from "view/supermarketCategory/component/supermarketCategoryFilter/SupermarketCategoryFilterBody";
import SupermarketCategoryFilterFooter from "view/supermarketCategory/component/supermarketCategoryFilter/SupermarketCategoryFilterFooter";
import useSupermarketCategoryFilter from "view/supermarketCategory/component/context/useSupermarketCategoryFilter";
import useSupermarketCategoryFilterAction from "view/supermarketCategory/component/context/useSupermarketCategoryFilterAction";
import {setSupermarketCategoryFilterOpen} from "view/supermarketCategory/component/context/SupermarketCategoryFilterProvider";

function SupermarketCategoryFilter() {
  const {isOpen} = useSupermarketCategoryFilter();
  const dispatch = useSupermarketCategoryFilterAction();

  if (!isOpen) return null;
  return (
    <CustomModal
      open={isOpen}
      onCancel={() => dispatch(setSupermarketCategoryFilterOpen(false))}
      header={<SupermarketCategoryFilterHeader />}
      classNameHeader="bg-transparent border-b border-borderColor"
      body={<SupermarketCategoryFilterBody />}
      classNameFooter="border-t border-borderColor"
      footer={<SupermarketCategoryFilterFooter />}
    />
  );
}

export default SupermarketCategoryFilter;
