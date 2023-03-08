import {BottomSheet} from "components";
import {useCallback, useEffect} from "react";
import {
  setRestaurantOrderPreviousReceiptClose,
  useRestaurantOrderPreviousReceipt,
  useRestaurantOrderPreviousReceiptAction,
} from "view/restaurantOrderPrevious/component/context/RestaurantOrderPreviousReceiptProvider";

// interface IRestaurantOrderPreviousReceiptOrdersItem {
//   title: string;
//   price: number;
// }

// type TRestaurantOrderPreviousReceiptOrders = IRestaurantOrderPreviousReceiptOrdersItem[];

// interface IRestaurantOrderPreviousReceipt {
//   orders: TRestaurantOrderPreviousReceiptOrders;
//   open: boolean;
//   onClose?: DrawerProps["onClose"];
// }

const order = Array.from(new Array(5), () => ({
  title: "مرغ سوخاری پنج تکه اسپایسی",
  price: 235000,
}));

function RestaurantOrderPreviousReceipt() {
  // const {orders, open, onClose} = props;
  const {open} = useRestaurantOrderPreviousReceipt();
  const dispatch = useRestaurantOrderPreviousReceiptAction();

  useEffect(() => {
    if (!open) {
      const element = document.getElementsByClassName("ant-drawer-body");
      if (element.length) {
        element[0].scrollTo({top: 0});
      }
    }
  }, [open]);

  const onClose = useCallback(() => {
    dispatch(setRestaurantOrderPreviousReceiptClose());
  }, [dispatch]);

  return (
    <BottomSheet open={open} onClose={onClose} height={300} title="فاکتور">
      <div>
        {order.map((item, index) => {
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
