import {Button, DrawerProps} from "antd";
import BottomSheet from "components/customDrawer/BottomSheet";

interface ISuperMarketSortBottomSheet {
  open: boolean;
  onClose: DrawerProps["onClose"];
  onClick: (value: any) => void;
  data: {title: string; value: string}[];
}

function SupermarketSortBottomSheet(props: ISuperMarketSortBottomSheet) {
  const {open, onClose, onClick, data} = props;
  return (
    <BottomSheet open={open} onClose={onClose} title="به ترتیب ..." height={220}>
      {data.map((item, index) => {
        return (
          <Button
            onClick={() => onClick(item)}
            key={index}
            className="supermarket_btn w-full h-[45px] text-right border-0 border-b border-borderColor rounded-none"
          >
            {item.title}
          </Button>
        );
      })}
    </BottomSheet>
  );
}

export default SupermarketSortBottomSheet;
