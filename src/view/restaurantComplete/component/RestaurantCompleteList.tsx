import RestaurantCompleteCard from "view/restaurantComplete/component/restaurantCompleteCard/RestaurantCompleteCard";

const data = [
  {
    title: "مرغ سوخاری ۲تکه نرمال (بدون پوست) تک نفره",
    price: 162500,
    count: 1,
    extra: [
      {
        title: "سس خردل",
        price: 5500,
      },
      {
        title: "سس کچاپ",
        price: 5500,
      },
      {
        title: "سس سفید",
        price: 5500,
      },
      {
        title: "سس گوجه",
        price: 5500,
      },
    ],
  },
  {
    title: "مرغ سوخاری ۲تکه نرمال (بدون پوست) تک نفره",
    price: 162500,
    count: 1,
  },
];

function RestaurantCompleteList() {
  return (
    <div className="mt-headerNormal px-screenSpace">
      {data.map((item, index) => {
        return (
          <RestaurantCompleteCard
            key={index}
            title={item.title}
            price={item.price}
            count={item.count}
            extra={item.extra}
            onAddItem={() => {}}
          />
        );
      })}
    </div>
  );
}

export default RestaurantCompleteList;
