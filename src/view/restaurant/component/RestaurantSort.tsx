import React from "react";
import {Button} from "antd";
import {IconSort} from "assets/icons";

function RestaurantSort() {
  return (
    <div className="flex items-center justify-between px-screenSpace">
      <div className="font-medium">17 رستوران باز</div>
      <Button
        icon={<IconSort className="w-5 h-auto ml-1" />}
        className="flex items-center text-primary border-0 shadow-none"
      >
        به ترتیب...
      </Button>
    </div>
  );
}

export default RestaurantSort;
