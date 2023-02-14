import React from "react";
import {IconSearch} from "assets/icons";
import {Button} from "antd";

function SupermarketSearch() {
  return (
    <Button className="flex items-center w-full border-0 rounded-full h-[55px] inner_box text-iconColor px-5 mb-5">
      <IconSearch className="w-7 h-auto" />
      <span className="mr-2 font-medium text-[11px]">جستجو</span>
    </Button>
  );
}

export default SupermarketSearch;
