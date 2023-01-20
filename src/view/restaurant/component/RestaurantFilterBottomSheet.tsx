import React from "react";
import BottomSheet from "components/customDrawer/BottomSheet";
import {IconCategory} from "assets/icons";
import fastFood from "assets/images/fastfood.png";
import irani from "assets/images/irani.png";
import kabab from "assets/images/kabab.png";
import salad from "assets/images/salad.png";
import seafood from "assets/images/seafood.png";
import {DrawerProps} from "antd";

interface IRestaurantFilterBottomSheet {
  open: boolean;
  onClose: DrawerProps["onClose"];
}

const data = [
  {
    title: "فست فود",
    image: fastFood.src,
  },
  {
    title: "ایرانی",
    image: irani.src,
  },
  {
    title: "کباب",
    image: kabab.src,
  },
  {
    title: "سالاد",
    image: salad.src,
  },
  {
    title: "دریایی",
    image: seafood.src,
  },
];

function RestaurantFilterBottomSheet(props: IRestaurantFilterBottomSheet) {
  const {open, onClose} = props;
  return (
    <BottomSheet open={open} onClose={onClose} title="انتخاب دسته بندی" height={370}>
      <div className="flex items-center py-[12px] text-primary border-b border-borderColor">
        <IconCategory className="w-5 h-auto ml-1" />
        <div>همه دسته ها</div>
      </div>
      {data.map((item, index) => {
        return (
          <div key={index} className="flex items-center py-[12px] border-b border-borderColor">
            <img src={item.image} className="w-5 h-5 object-cover object-center ml-2" />
            <div>{item.title}</div>
          </div>
        );
      })}
    </BottomSheet>
  );
}

export default RestaurantFilterBottomSheet;
