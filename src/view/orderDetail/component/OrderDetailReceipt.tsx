import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";

interface IOrderDetailReceipt {
  receipt: number;
}
function OrderDetailReceipt({receipt}: IOrderDetailReceipt) {
  const typeColor = useTypeColor();
  const containerClassName = classNames({
    "flex items-center justify-end px-screenSpace my-5 text-[15px] font-semibold": true,
    "text-primary": typeColor === "default",
    "text-primarySupermarket": typeColor === "supermarket",
  });

  return (
    <div className={containerClassName}>
      <span>کد سفارش:</span>
      <span className="mr-1">{receipt}</span>
    </div>
  );
}

export default OrderDetailReceipt;
