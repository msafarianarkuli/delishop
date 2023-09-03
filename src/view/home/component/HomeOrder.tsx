import HomeOrderCard from "view/home/component/homeOrderCard";
import {HomeOrderData} from "view/home/context/HomeOrderDataProvider";
import {instant} from "utils/Const";

function HomeOrder() {
  const {data} = HomeOrderData();
  console.log(data);
  return (
    <div className="overflow-x-scroll flex gap-4 px-screenSpace mt-5">
      {data?.pages.map((value) => {
        return value.orders.map((item, index) => {
          return (
            <HomeOrderCard
              key={index}
              categoryId={item.vendor.vendor_category_id}
              id={item.id}
              title={item.vendor.name}
              deliveryTime={item.sendtime === 100 ? instant : item.sendtime.toString()}
              image={item.vendor.logo}
              orderStatus={item.orderstatus}
              count={value?.total}
            />
          );
        });
      })}
    </div>
  );
}

export default HomeOrder;
