import HomeOrderCard from "view/home/component/homeOrderCard";
import {HomeOrderData} from "view/home/context/HomeOrderDataProvider";

function HomeOrder() {
  const {data} = HomeOrderData();
  return (
    <div className="flex overflow-auto px-screenSpace mt-5">
      {data?.pages.map((value) => {
        return value.orders.map((item, index) => {
          return (
            <HomeOrderCard
              key={index}
              id={item.id}
              title={item.vendor.name}
              deliveryTime={item.sendtime === 100 ? "فوری" : item.sendtime.toString()}
              image={item.vendor.logo}
              orderStatus={item.orderstatus}
            />
          );
        });
      })}
    </div>
  );
}

export default HomeOrder;
