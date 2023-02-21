import React from "react";
import {Button} from "antd";
import useSupermarketCategoryFilter from "view/supermarketCategory/component/context/useSupermarketCategoryFilter";

function SupermarketCategoryFilterFooter() {
  const {isLoading} = useSupermarketCategoryFilter();

  return (
    <Button
      loading={isLoading}
      htmlType="submit"
      form="categoryFilter"
      type="primary"
      className="submit-btn-supermarket modal-submit-btn w-full rounded-[10px] my-5"
    >
      اعمال فیلتر
    </Button>
  );
}

export default SupermarketCategoryFilterFooter;
