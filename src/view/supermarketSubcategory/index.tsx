import React from "react";
import SupermarketSubcategoryHeader from "view/supermarketSubcategory/component/SupermarketSubcategoryHeader";
import SupermarketSubcategoryList from "view/supermarketSubcategory/component/SupermarketSubcategoryList";
import useSupermarketNavigation from "hooks/useSupermarketNavigation";
import {BottomNavigation} from "components";

function SupermarketSubcategory() {
  const data = useSupermarketNavigation();
  return (
    <>
      <SupermarketSubcategoryHeader />
      <div className="mt-headerNormal px-screenSpace">
        <SupermarketSubcategoryList />
        <div className="w-full h-bottomNavigation" />
        <BottomNavigation primary="supermarket" data={data} />
      </div>
    </>
  );
}

export default SupermarketSubcategory;
