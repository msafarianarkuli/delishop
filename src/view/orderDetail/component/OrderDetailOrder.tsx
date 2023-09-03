import {TGetOrderDetailDataProductKinds} from "types/interfaceOrderDetail";

interface IOrderDetailOrder {
  order: TGetOrderDetailDataProductKinds;
}

function OrderDetailOrder(props: IOrderDetailOrder) {
  const {order} = props;
  return (
    <div>
      {order.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between px-screenSpace border-b border-borderColor py-4 first:pt-0"
          >
            <img
              src={item.photo_igu}
              alt={item.product.displayname}
              className="w-[40px] h-[40px] object-center object-cover rounded-[4px]"
            />
            <div className="text-[15px] ml-auto mx-2 truncate">
              {item.product.displayname}
              {item.count_num > 1 ? <span className="mr-1">({item.count_num})</span> : null}
            </div>
            <div className="whitespace-nowrap">
              <span className="text-[15px]">
                {Math.round((item.price_prc * item.count_num) / 10).toLocaleString("en-US")}
              </span>
              <span className="mr-1 text-[11px]">تومان</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderDetailOrder;
