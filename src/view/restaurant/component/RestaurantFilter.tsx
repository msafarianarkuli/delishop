import React, {useState} from "react";
import RestaurantCategory from "view/restaurant/component/RestaurantCategory";
import RestaurantFilterBtn from "view/restaurant/component/RestaurantFilterBtn";
import RestaurantFilterBottomSheet from "view/restaurant/component/RestaurantFilterBottomSheet";

function RestaurantFilter() {
  const [bottomSheet, setBottomSheet] = useState(false);

  return (
    <>
      <div className="flex items-center px-screenSpace">
        <RestaurantCategory onClick={() => setBottomSheet(true)} />
        <div className="flex flex-1 flex-nowrap overflow-auto py-5 px-2">
          <RestaurantFilterBtn title="کباب" />
          <RestaurantFilterBtn title="ایرانی" />
          <RestaurantFilterBtn title="دارای سکه" />
        </div>
      </div>
      <RestaurantFilterBottomSheet open={bottomSheet} onClose={() => setBottomSheet(false)} onClick={() => {}} />
    </>
  );
}

export default RestaurantFilter;
