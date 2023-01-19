import React from "react";
import classNames from "classnames";

const data = [
  {
    title: "پر طرفدارها",
  },
  {
    title: "تک نفره",
  },
  {
    title: "خانواده",
  },
  {
    title: "پیتزا",
  },
  {
    title: "سالاد",
  },
];

function RestaurantDetailTab() {
  return (
    <div className="flex items-center flex-nowrap overflow-auto pb-2">
      {data.map((item, index) => {
        const className = classNames({
          "relative text-[15px] font-semibold ml-5 last:ml-0 whitespace-nowrap": true,
          "after:content-[' '] after:absolute after:bottom-[-3px] after:right-1/3 after:h-[2px] after:w-1/3 after:bg-primary after:rounded-full":
            index == 0,
        });
        return (
          <div key={index} className={className}>
            {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantDetailTab;
