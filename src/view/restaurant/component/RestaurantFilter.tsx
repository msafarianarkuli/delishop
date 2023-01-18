import React from "react";
import RestaurantCategory from "view/restaurant/component/RestaurantCategory";
import RestaurantFilterBtn from "view/restaurant/component/RestaurantFilterBtn";

function RestaurantFilter() {
  return (
    <div className="flex items-center px-screenSpace">
      <RestaurantCategory />
      <div className="flex flex-1 flex-nowrap overflow-auto py-5 px-2">
        <RestaurantFilterBtn title="کباب" />
        <RestaurantFilterBtn title="ایرانی" />
        <RestaurantFilterBtn title="دارای سکه" />
      </div>
    </div>
  );
}

export default RestaurantFilter;
