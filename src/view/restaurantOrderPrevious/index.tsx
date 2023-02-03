import {RestaurantOrderAppHeader} from "components";
import RestaurantOrderPreviousCard from "view/restaurantOrderPrevious/component/restaurantOrderPreviousCard/RestaurantOrderPreviousCard";
import img from "assets/images/res-order-logo.png";
import img1 from "assets/images/res-order-barger.png";
import RestaurantOrderPreviousReceipt from "view/restaurantOrderPrevious/component/RestaurantOrderPreviousReceipt";
import {useState} from "react";

const arr = Array.from(new Array(10), (_, i) => ({
  title: "رستوران آریایی",
  address: "وردآورد",
  receiptNumber: 321,
  image: img.src,
  deliveryTitle: "دفتر",
  coin: 15,
  status: "تحویل شده",
  date: new Date().toISOString(),
  orders: Array.from(new Array(10), () => ({
    price: 98000,
    image: img1.src,
  })),
  hasRate: i % 2 === 0,
}));

const order = Array.from(new Array(5), () => ({
  title: "مرغ سوخاری پنج تکه اسپایسی",
  price: 235000,
}));

function RestaurantOrderPrevious() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <RestaurantOrderAppHeader active="previous" />
      <div className="mt-headerNormal">
        {arr.map((item, index) => {
          return (
            <RestaurantOrderPreviousCard
              key={index}
              title={item.title}
              address={item.address}
              receiptNumber={item.receiptNumber}
              image={item.image}
              deliveryTitle={item.deliveryTitle}
              coin={item.coin}
              status={item.status}
              date={item.date}
              orders={item.orders}
              hasRate={item.hasRate}
              onClickReceipt={() => setModal(true)}
              onClickReOrder={() => {}}
            />
          );
        })}
      </div>
      <RestaurantOrderPreviousReceipt orders={order} open={modal} onClose={() => setModal(false)} />
    </>
  );
}

export default RestaurantOrderPrevious;
