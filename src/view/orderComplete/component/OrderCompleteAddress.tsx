import OrderCompleteTitle from "view/orderComplete/component/OrderCompleteTitle";
import {IconRoundedLeft} from "assets/icons";
import OrderCompleteAddressCard from "view/orderComplete/component/orderCompleteAddressCard/OrderCompleteAddressCard";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";
import Link from "next/link";
import {useOrderCompleteAddress} from "view/orderComplete/context/OrderCompleteAddressProvider";
import {
  setOrderCompleteDeliveryAddress,
  useOrderComplete,
  useOrderCompleteAction,
} from "view/orderComplete/context/OrderCompleteProvider";
import {useRouter} from "next/router";

function OrderCompleteTitleLeft() {
  const type = useTypeColor();
  const router = useRouter();

  const linkClassName = classNames({
    "flex items-center font-medium": true,
    "text-primary": type === "default",
    "text-primarySupermarket": type === "supermarket",
  });
  return (
    <Link href={`/address?callbackUrl=${router.asPath}`} className={linkClassName}>
      <div>تغییر آدرس</div>
      <IconRoundedLeft className="w-5 h-5" />
    </Link>
  );
}

function OrderCompleteAddress() {
  const {data} = useOrderCompleteAddress();
  const type = useTypeColor();
  const {deliveryAddress} = useOrderComplete();
  const dispatch = useOrderCompleteAction();
  return (
    <div className="mt-headerNormal">
      <OrderCompleteTitle type={type} title="روش تحویل سفارش" left={<OrderCompleteTitleLeft />} />
      <div className="px-screenSpace">
        {data?.map((item, index) => {
          return (
            <OrderCompleteAddressCard
              key={index}
              id={item.id.toString()}
              title={item.title}
              address={item.address}
              point={{lat: item.latitude, lng: item.longitude}}
              value={deliveryAddress?.id === item.id}
              onChange={() => {
                dispatch(setOrderCompleteDeliveryAddress(item));
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OrderCompleteAddress;
