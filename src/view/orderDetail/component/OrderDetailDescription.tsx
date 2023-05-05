interface IOrderDetailDescription {
  text?: string;
}

function OrderDetailDescription({text}: IOrderDetailDescription) {
  if (!text) return null;
  return (
    <div className="px-screenSpace mt-5">
      <div className="inner_box w-full font-medium px-5 py-3">
        <div className="text-[11px]">توضیحات سفارش</div>
        <div className="text-[13px] mt-3">{text}</div>
      </div>
    </div>
  );
}

export default OrderDetailDescription;
