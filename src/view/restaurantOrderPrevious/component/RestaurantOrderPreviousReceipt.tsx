import {BottomSheet} from "components";
import {DrawerProps} from "antd";
import {useEffect} from "react";

interface IRestaurantOrderPreviousReceiptOrdersItem {
  title: string;
  price: number;
}

type TRestaurantOrderPreviousReceiptOrders = IRestaurantOrderPreviousReceiptOrdersItem[];

interface IRestaurantOrderPreviousReceipt {
  orders: TRestaurantOrderPreviousReceiptOrders;
  open: boolean;
  onClose?: DrawerProps["onClose"];
}

function RestaurantOrderPreviousReceipt(props: IRestaurantOrderPreviousReceipt) {
  const {orders, open, onClose} = props;

  useEffect(() => {
    if (!open) {
      const element = document.getElementsByClassName("ant-drawer-body");
      if (element.length) {
        element[0].scrollTo({top: 0});
      }
    }
  }, [open]);

  return (
    <BottomSheet open={open} onClose={onClose} height={300} title="فاکتور">
      <div>
        {orders.map((item, index) => {
          return (
            <div key={index} className="flex items-center justify-between mb-5 first:mt-5 text-[15px] font-medium">
              <div>{item.title}</div>
              <div>
                <span>{item.price.toLocaleString("en-US")}</span>
                <span className="mr-1 text-[13px]">تومان</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between mb-5 text-[15px] font-medium">
        <div className="text-primary">مجموع سفارش</div>
        <div>
          <span>310,000</span>
          <span className="mr-1 text-[13px]">تومان</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-5 text-[15px] font-medium">
        <div>هزینه ارسال</div>
        <div>
          <span>7,500</span>
          <span className="mr-1 text-[13px]">تومان</span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-5 text-[15px] font-medium border-t border-borderColor">
        <div className="text-primary">جمع کل</div>
        <div>
          <span>710,000</span>
          <span className="mr-1 text-[13px]">تومان</span>
        </div>
      </div>
    </BottomSheet>
  );
}

export default RestaurantOrderPreviousReceipt;
