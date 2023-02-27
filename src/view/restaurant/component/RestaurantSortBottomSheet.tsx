import React from "react";
import BottomSheet from "components/customDrawer/BottomSheet";
import {Button, DrawerProps} from "antd";

interface IRestaurantFilterBottomSheet {
  open: boolean;
  onClose: DrawerProps["onClose"];
  onClick: (value: any) => void;
  data: {title: string; value: string}[];
}

function RestaurantSortBottomSheet(props: IRestaurantFilterBottomSheet) {
  const {open, onClose, onClick, data} = props;
  return (
    <BottomSheet open={open} onClose={onClose} title="به ترتیب ..." height={265}>
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
