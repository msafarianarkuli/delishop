import RestaurantCompleteTitle from "view/restaurantComplete/component/RestaurantCompleteTitle";
import {IconBank, IconCash, IconWallet} from "assets/icons";
import styles from "view/restaurantComplete/restaurantComplete.module.scss";
import classNames from "classnames";
import {useState} from "react";

const data = [
  {
    id: 1,
    title: "کیف پول",
    icon: IconWallet,
  },
  {
    id: 2,
    title: "درگاه بانکی",
    icon: IconBank,
  },
  {
    id: 3,
    title: "نقدی",
    icon: IconCash,
  },
];

function RestaurantCompletePaymentType() {
  const [payment, setPayment] = useState(1);
  return (
    <div className="mt-7">
      <RestaurantCompleteTitle title="انتخاب نحوه پرداخت" />
      <div className="px-screenSpace">
        <div className="relative pb-[21.5%]">
          <div className="absolute flex items-center justify-between w-full h-full">
            {data.map((item, index) => {
              const container = classNames({
                [styles.restaurant_complete_payment_type_card]: true,
                "text-primary border border-primary": payment === item.id,
              });
              const Icon = item.icon;
              return (
                <button onClick={() => setPayment(item.id)} key={index} className={container}>
                  <Icon className="w-auto h-6" />
                  <div className="mt-2">{item.title}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCompletePaymentType;
