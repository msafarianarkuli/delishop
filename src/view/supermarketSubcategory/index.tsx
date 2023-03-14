import React from "react";
import SupermarketSubcategoryHeader from "view/supermarketSubcategory/component/SupermarketSubcategoryHeader";
import SupermarketSubcategoryList from "view/supermarketSubcategory/component/SupermarketSubcategoryList";

function SupermarketSubcategory() {
  return (
    <>
      <SupermarketSubcategoryHeader />
      <div className="mt-headerNormal px-screenSpace">
        <SupermarketSubcategoryList />
      </div>
    </>
  );
}

export default SupermarketSubcategory;
