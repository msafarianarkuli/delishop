import RestaurantHeader from "view/restaurant/component/RestaurantHeader";
import RestaurantFilter from "view/restaurant/component/RestaurantFilter";
import RestaurantSort from "view/restaurant/component/RestaurantSort";
import RestaurantCard from "view/restaurant/component/restaurantCard/RestaurantCard";
import img1 from "assets/images/res01.png";
import {BottomNavigation} from "components";
import Link from "next/link";
import {IconCart, IconHome, IconOrder, IconSearch} from "assets/icons";
import {TDataBottomNavigation} from "components/bottomNavigation/BottomNavigation";

const arr = Array.from(new Array(5), (_, i) => ({
  id: i + 1,
  image: img1.src,
  title: "ساندویچ برگر 99",
  address: "خیابان ولی عصر",
  description: "فست فود برگر پیتزا ساندویچ",
  star: 4,
  coin: 15,
  time: 35,
}));

const data: TDataBottomNavigation = [
  {
    icon: IconHome,
    title: "خانه",
    link: "/restaurant",
  },
  {
    icon: IconCart,
    title: "سبد خرید",
    link: "/restaurant/cart",
  },
  {
    icon: IconSearch,
    title: "جستجو",
    link: "/restaurant",
  },
  {
    icon: IconOrder,
    title: "سفارشات",
    link: "/restaurant/order/active",
  },
];

function Restaurant() {
  return (
    <>
      <div className="fixed z-10 top-0 right-0 left-0 header_background">
        <RestaurantHeader />
        <RestaurantFilter />
        <RestaurantSort />
      </div>
      <div className="flex flex-col flex-1 px-screenSpace overflow-auto pt-[160px] pb-bottomNavigation">
        {arr.map((item) => {
          return (
            <Link key={item.id} href={`/restaurant/${item.id}`}>
              <RestaurantCard
                image={item.image}
                title={item.title}
                address={item.address}
                description={item.description}
                star={item.star}
                coin={item.coin}
                time={item.time}
              />
            </Link>
          );
        })}
      </div>
      <BottomNavigation data={data} />
    </>
  );
}

export default Restaurant;
