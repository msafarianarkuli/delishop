interface IRestaurantOrderDetailAddress {
  title: string;
  address: string;
}

function RestaurantOrderDetailAddress(props: IRestaurantOrderDetailAddress) {
  const {address, title} = props;
  return (
    <div className="px-screenSpace border-b border-borderColor pb-2">
      <div className="text-[17] font-medium">
        <span>ارسال به:</span>
        <span className="mr-1">{title}</span>
      </div>
      <div className="text-[15px] mt-2">{address}</div>
    </div>
  );
}

export default RestaurantOrderDetailAddress;
