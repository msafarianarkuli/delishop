import React from "react";
import BottomSheet from "components/customDrawer/BottomSheet";
import {Button, DrawerProps} from "antd";

interface IRestaurantFilterBottomSheet {
  open: boolean;
  onClose: DrawerProps["onClose"];
  onClick: (value: any) => void;
}

const data = [
  {
    title: "بالاترین سکه",
  },
  {
    title: "نزدیک ترین",
  },
  {
    title: "جدید ترین",
  },
  {
    title: "ارزان ترین",
  },
];

function RestaurantSortBottomSheet(props: IRestaurantFilterBottomSheet) {
  const {open, onClose, onClick} = props;
  return (
    <BottomSheet open={open} onClose={onClose} title="به ترتیب ..." height={370}>
      {data.map((item, index) => {
        return (
          <Button
            onClick={() => onClick(item)}
            key={index}
            className="w-full h-[45px] text-right border-0 border-b border-borderColor rounded-none"
          >
            {item.title}
          </Button>
        );
      })}
    </BottomSheet>
  );
}

export default RestaurantSortBottomSheet;
