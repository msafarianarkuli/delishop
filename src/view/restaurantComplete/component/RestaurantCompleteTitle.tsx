import React from "react";

function RestaurantCompleteTitle({title}: {title: string}) {
  return (
    <div className="flex items-center px-screenSpace mb-5">
      <div className="w-[7px] h-[7px] bg-primary ml-1 rounded-full" />
      <div className="font-medium">{title}</div>
    </div>
  );
}

export default RestaurantCompleteTitle;
