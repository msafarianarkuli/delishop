import {useEffect, useMemo, useRef} from "react";
import RestaurantOrderDetailAddress from "view/restaurantOrderDetail/component/RestaurantOrderDetailAddress";
import RestaurantOrderDetailDelivery from "view/restaurantOrderDetail/component/RestaurantOrderDetailDelivery";
import RestaurantOrderDetailRestaurantName from "view/restaurantOrderDetail/component/RestaurantOrderDetailRestaurantName";
import RestaurantOrderDetailOrder from "view/restaurantOrderDetail/component/RestaurantOrderDetailOrder";
import RestaurantOrderDetailTotal from "view/restaurantOrderDetail/component/RestaurantOrderDetailTotal";
import RestaurantOrderDetailDescription from "view/restaurantOrderDetail/component/RestaurantOrderDetailDescription";
import RestaurantOrderDetailReceipt from "view/restaurantOrderDetail/component/RestaurantOrderDetailReceipt";
import {useRouter} from "next/router";
import {useRestaurantOrderDetailData} from "view/restaurantOrderDetail/context/RestaurantOrderDetailDataProvider";
import {instant} from "utils/Const";

function RestaurantOrderDetailContentItems() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const {data} = useRestaurantOrderDetailData();

  useEffect(() => {
    const div = ref.current as HTMLDivElement;
    if (router.query?.map && div.classList.contains("mt-headerNormal")) {
      div.classList.remove("mt-headerNormal");
      div.classList.add("mt-[36px]");
    } else if (!router.query?.map && !div.classList.contains("mt-headerNormal")) {
      div.classList.remove("mt-[36px]");
      div.classList.add("mt-headerNormal");
    }
  }, [router.query?.map]);

  const deliveryTime = useMemo(() => {
    if (data?.sendtime === 100) {
      return instant;
    }
    return data?.sendtime?.toString();
  }, [data?.sendtime]);

  return (
    <>
      <div id="restaurantOrderDetailContentContainer" ref={ref} className="mt-headerNormal">
        <div id="restaurantOrderDetailContentPartOne">
          <RestaurantOrderDetailAddress title={data?.address.title || ""} address={data?.address.address || ""} />
          <RestaurantOrderDetailDelivery orderStatus={data?.orderstatus || 0} deliveryTime={deliveryTime || ""} />
        </div>
        <RestaurantOrderDetailRestaurantName image={data?.vendor.logo} title={data?.vendor.name || ""} />
        <RestaurantOrderDetailOrder order={data?.productKinds || []} />
        <RestaurantOrderDetailTotal price={Math.round((data?.topayprice || 0) / 10)} />
        <RestaurantOrderDetailDescription text={data?.description?.trim()} />
        <RestaurantOrderDetailReceipt receipt={data?.id || 0} />
      </div>
    </>
  );
}

export default RestaurantOrderDetailContentItems;
