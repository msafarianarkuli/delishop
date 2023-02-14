import SuperMarketCard from "view/supermarket/component/supermarketCard";
import img from "assets/images/supermarket_list.png";

const data = Array.from(new Array(10), () => ({
  title: "سوپرمارکت شهرک",
  address: "بلوار اصلی",
  price: 6500,
  rate: 4.6,
  coin: 15,
  image: img.src,
}));

function SupermarketList() {
  return (
    <div className="mt-5">
      {data.map((item, index) => {
        return (
          <SuperMarketCard
            key={index}
            title={item.title}
            address={item.address}
            price={item.price}
            coin={item.coin}
            rate={item.rate}
            image={item.image}
          />
        );
      })}
    </div>
  );
}

export default SupermarketList;
