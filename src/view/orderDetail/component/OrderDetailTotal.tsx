import {roundPrice} from "utils/utils";

interface IOrderDetailTotal {
  price: number;
}

function OrderDetailTotal({price}: IOrderDetailTotal) {
  return (
    <div className="flex items-center justify-between px-screenSpace border-b border-borderColor py-4">
      <div className="text-[15px]">مجموع:</div>
      <div className="whitespace-nowrap">
        <span className="text-[15px] font-bold">{roundPrice(price).toLocaleString("en-US")}</span>
        <span className="mr-1 text-[11px]">تومان</span>
      </div>
    </div>
  );
}

export default OrderDetailTotal;
