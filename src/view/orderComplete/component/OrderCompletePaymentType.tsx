import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import {IconBank, IconCash, IconWallet} from "assets/icons";
import styles from "view/orderComplete/orderComplete.module.scss";
import classNames from "classnames";
import useTypeColor from "hooks/useTypeColor";
import {
  setOrderCompletePaymentType,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";

const data = [
  {
    id: 60,
    title: "کیف پول",
    icon: IconWallet,
  },
  {
    id: 34,
    title: "درگاه بانکی",
    icon: IconBank,
  },
  {
    id: 35,
    title: "نقدی",
    icon: IconCash,
  },
];

function OrderCompletePaymentType() {
  const {paymentType} = useOrderComplete();
  const dispatch = useOrderCompleteAction();
  const type = useTypeColor();
  const selectedClassName = classNames({
    "text-primary border border-primary": type === "default",
    "text-primarySupermarket border border-primarySupermarket": type === "supermarket",
  });

  return (
    <div className="mt-7">
      <OrderCompleteTitle type={type} title="انتخاب نحوه پرداخت" />
      <div className="px-screenSpace">
        <div className="relative pb-[21.5%]">
          <div className="absolute flex items-center justify-between w-full h-full">
            {data.map((item, index) => {
              const container = classNames({
                [styles.restaurant_complete_payment_type_card]: true,
                [selectedClassName]: paymentType === item.id,
              });
              const Icon = item.icon;
              return (
                <button
                  onClick={() => dispatch(setOrderCompletePaymentType(item.id))}
                  key={index}
                  className={container}
                >
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

export default OrderCompletePaymentType;
