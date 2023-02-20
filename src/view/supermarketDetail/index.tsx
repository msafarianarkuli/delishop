import SupermarketDetailHeader from "view/supermarketDetail/component/SupermarketDetailHeader";
import SupermarketDetailTitle from "view/supermarketDetail/component/SupermarketDetailTitle";
import SupermarketDetailList from "view/supermarketDetail/component/SupermarketDetailList";
import img from "assets/images/supermarket_detail.png";
import {BottomNavigation, BottomPageGradient} from "components";
import useSupermarketNavigation from "hooks/useSupermarketNavigation";

const supermarket = {
  image: img.src,
  title: "تک مارکت",
  address: "بلوار اصلی",
  price: 6500,
  rate: 4.6,
  coin: 15,
};

function SupermarketDetail() {
  const data = useSupermarketNavigation();

  return (
    <>
      <SupermarketDetailHeader />
      <div className="mt-headerNormal px-screenSpace">
        <SupermarketDetailTitle
          title={supermarket.title}
          coin={supermarket.coin}
          image={supermarket.image}
          rate={supermarket.rate}
          price={supermarket.price}
          address={supermarket.address}
        />
      </div>
      <SupermarketDetailList />
      <BottomPageGradient />
      <div className="w-full h-bottomNavigation" />
      <BottomNavigation primary="supermarket" data={data} />
    </>
  );
}

export default SupermarketDetail;
