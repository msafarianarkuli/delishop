import React, {ReactNode} from "react";

function RestaurantCompleteTitle({title, left}: {title: string; left?: ReactNode}) {
  return (
    <div className="flex items-center justify-between px-screenSpace mb-5">
      <div className="flex items-center">
        <div className="w-[7px] h-[7px] bg-primary ml-1 rounded-full" />
        <div className="font-medium">{title}</div>
      </div>
      {left}
    </div>
  );
}

export default RestaurantCompleteTitle;
