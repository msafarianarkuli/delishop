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
import {useEffect, useMemo} from "react";
import {useOrderCompleteVendorDetailData} from "view/orderComplete/context/OrderCompleteVendorDetailDataProvider";
import {useSelector} from "react-redux";
import {selectAddressMap} from "redux/addressMap/addressMapReducer";

function OrderCompleteTitleLeft() {
  const type = useTypeColor();
  const router = useRouter();
  const {data} = useOrderCompleteAddress();

  const linkClassName = classNames({
    "flex items-center font-medium": true,
    "text-primary": type === "default",
    "text-primarySupermarket": type === "supermarket",
  });

  const title = useMemo(() => (data?.length ? "تغییر آدرس" : "تکمیل آدرس"), [data?.length]);
  return (
    <Link href={`/address?callbackUrl=${router.asPath}`} className={linkClassName}>
      <div>{title}</div>
      <IconRoundedLeft className="w-5 h-5" />
    </Link>
  );
}

function OrderCompleteAddress() {
  const {data, isLoading} = useOrderCompleteAddress();
  const {data: vendorData, isLoading: vendorDataLoading} = useOrderCompleteVendorDetailData();
  const type = useTypeColor();
  const {deliveryAddress} = useOrderComplete();
  const dispatch = useOrderCompleteAction();
  const {isUserAddressStorageLoaded, userAddress} = useSelector(selectAddressMap);

  useEffect(() => {
    if (isUserAddressStorageLoaded && userAddress && data && !deliveryAddress) {
      const tmp = data.find((item) => item.id === userAddress.id);
      if (tmp) {
        dispatch(setOrderCompleteDeliveryAddress(tmp));
      }
    }
  }, [data, deliveryAddress, dispatch, isUserAddressStorageLoaded, userAddress]);

  return (
    <div className="mt-headerNormal">
      <OrderCompleteTitle type={type} title="روش تحویل سفارش" left={<OrderCompleteTitleLeft />} />
      <div className="px-screenSpace">
        {isLoading ? <div>درحال دریافت اطلاعات</div> : null}
        {data
          ?.filter((element) => element.id === userAddress?.id)
          .map((item, index) => {
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
        {!vendorDataLoading && vendorData?.delivery_at_place ? (
          <OrderCompleteAddressCard
            id={"0"}
            title="حضوری"
            address={vendorData.address}
            point={{lat: vendorData.lat, lng: vendorData.long}}
            value={deliveryAddress?.id === 0}
            onChange={() => {
              dispatch(
                setOrderCompleteDeliveryAddress({
                  id: 0,
                  address: vendorData.address,
                  title: "حضوری",
                  latitude: vendorData.lat,
                  longitude: vendorData.long,
                  tel: "",
                  description: "",
                  ownername: "",
                })
              );
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default OrderCompleteAddress;
