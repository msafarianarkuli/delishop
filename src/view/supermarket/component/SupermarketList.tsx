import SuperMarketCard from "view/supermarket/component/supermarketCard";
// import img from "assets/images/supermarket_list.png";
import Link from "next/link";
import {useSupermarketData} from "view/supermarket/context/SuperMarketDataProvider";

function SupermarketList() {
  const {data} = useSupermarketData();
  return (
    <div className="mt-5">
      {data?.vendors.map((item, index) => {
        return (
          <Link key={index} href={`/supermarket/${item.id}`}>
            <SuperMarketCard
              title={item.name}
              deliveryPrice={60000}
              coin={item.point}
              rate={item.rate}
              image={item.logo}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default SupermarketList;
