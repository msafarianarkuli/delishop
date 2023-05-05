interface IOrderDetailReceipt {
  receipt: number;
}
function OrderDetailReceipt({receipt}: IOrderDetailReceipt) {
  return (
    <div className="flex items-center justify-end px-screenSpace text-primary my-5 text-[15px] font-semibold">
      <span>کد سفارش:</span>
      <span className="mr-1">{receipt}</span>
    </div>
  );
}

export default OrderDetailReceipt;
