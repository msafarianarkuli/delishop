import RestaurantCartHeader from "view/restaurantCart/component/RestaurantCartHeader";
import RestaurantCartCard from "view/restaurantCart/component/restaurantCartCard/RestaurantCartCard";
import {useRouter} from "next/router";

const arr = Array.from(new Array(5), (_, i) => ({
  id: i + 1,
  title: "رستوران آریایی",
  address: "وردآورد",
  data: [
    {count: 2, title: "چلوکباب کوبیده 250 گرم", price: 165000},
    {
      count: 1,
      title: "چلوجوجه کباب",
      price: 147000,
      extra: "پک کارد و چنگال، پک کارد و چنگال، سس ویژه کچاپ، سس ویژه کچاپ",
      extraPrice: 6000,
    },
  ],
}));

function RestaurantCart() {
  const router = useRouter();
  return (
    <>
      <RestaurantCartHeader />
      <div className="px-screenSpace mt-headerNormal">
        <div>
          {arr.map((item) => {
            return (
              <RestaurantCartCard
                key={item.id}
                title={item.title}
                address={item.address}
                data={item.data}
                onClickOk={() => router.push(`/restaurant/${item.id}`)}
                onClickRemove={() => {}}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RestaurantCart;
