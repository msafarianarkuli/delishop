interface IRestaurantOrderDetailOrderListItem {
  image: string;
  title: string;
  price: number;
}

type TRestaurantOrderDetailOrderList = IRestaurantOrderDetailOrderListItem[];

interface IRestaurantOrderDetailOrder {
  order: TRestaurantOrderDetailOrderList;
}

function RestaurantOrderDetailOrder(props: IRestaurantOrderDetailOrder) {
  const {order} = props;
  return (
    <div>
      {order.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between px-screenSpace border-b border-borderColor py-4 first:pt-0"
          >
            <img src={item.image} alt={item.title} className="w-[40px] h-[40px] object-center object-cover" />
            <div className="text-[15px] ml-auto mx-2 truncate">{item.title}</div>
            <div className="whitespace-nowrap">
              <span className="text-[15px]">{item.price.toLocaleString("en-US")}</span>
              <span className="mr-1 text-[11px]">تومان</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantOrderDetailOrder;
