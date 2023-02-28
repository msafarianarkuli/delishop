import {useEffect, useRef, useState} from "react";
import BottomSheet from "components/customDrawer/BottomSheet";
import {IconCategory} from "assets/icons";
import {Button, DrawerProps} from "antd";
import {IGetVendorsTagsDataItem, TGetVendorsTagsData} from "types/interfaceVendorsTags";

interface IRestaurantFilterBottomSheet {
  data: TGetVendorsTagsData;
  open: boolean;
  onClose: DrawerProps["onClose"];
  onClick: (value: IGetVendorsTagsDataItem) => void;
}

interface IRestaurantFilterBottomSheetList {
  data: TGetVendorsTagsData;
  onClick: (value: IGetVendorsTagsDataItem) => void;
}

function RestaurantFilterBottomSheetList({data, onClick}: IRestaurantFilterBottomSheetList) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <Button
            key={index}
            onClick={() => onClick(item)}
            className="flex w-full h-[45px] px-0 items-center border-0 border-b border-borderColor rounded-none"
          >
            <img src={item.logo} alt={item.name} className="w-5 h-5 object-cover object-center ml-2" />
            <div>{item.displayname}</div>
          </Button>
        );
      })}
    </>
  );
}

function RestaurantFilterBottomSheet(props: IRestaurantFilterBottomSheet) {
  const {open, onClose, onClick, data} = props;
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current as HTMLDivElement;
    if (div.scrollHeight) {
      const tmpHeight = div.scrollHeight + 130;
      setHeight(Math.min(tmpHeight, 400));
    }
  }, [data]);

  return (
    <>
      <div ref={ref} className="fixed -right-[100%]">
        <RestaurantFilterBottomSheetList data={data} onClick={onClick} />
      </div>
      <BottomSheet open={open} onClose={onClose} title="انتخاب دسته بندی" height={height}>
        <div className="flex items-center py-[12px] text-primary border-b border-borderColor">
          <IconCategory className="w-5 h-auto ml-1" />
          <div>همه دسته ها</div>
        </div>
        <RestaurantFilterBottomSheetList data={data} onClick={onClick} />
      </BottomSheet>
    </>
  );
}

export default RestaurantFilterBottomSheet;
