import React from "react";
import {Counter} from "components";

function RestaurantProductDetailPrice() {
  return (
    <div className="mt-6 pb-4 border-b border-borderColor">
      <div className="flex items-center justify-between px-screenSpace">
        <div>
          <span className="text-[20px] font-semibold">{(250000).toLocaleString("en-US")}</span>
          <span className="mr-1 text-[15px]">تومان</span>
        </div>
        <Counter initialValue={0} />
      </div>
    </div>
  );
}

export default RestaurantProductDetailPrice;
