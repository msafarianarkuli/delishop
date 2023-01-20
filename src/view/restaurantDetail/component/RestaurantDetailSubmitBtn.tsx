import React from "react";
import {Button} from "antd";
import {IconDownload} from "assets/icons";

function RestaurantDetailSubmitBtn() {
  return (
    <div className="fixed bottom-0 right-0">
      <Button
        type="primary"
        className="submit-btn fixed flex z-10 items-center bottom-[29px] right-[27px] left-[27px] rounded-[5px]"
      >
        <IconDownload className="w-5 h-5" />
        <div className="flex flex-1 justify-center">تکمیل خرید(2)</div>
        <div className="text-[13px] font-normal">
          <span>{(162500).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </div>
      </Button>
    </div>
  );
}

export default RestaurantDetailSubmitBtn;
