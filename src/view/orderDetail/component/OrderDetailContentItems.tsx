import {useEffect, useMemo, useRef} from "react";
import {useRouter} from "next/router";
import {instant} from "utils/Const";
import {useOrderDetailData} from "view/orderDetail/context/OrderDetailDataProvider";
import OrderDetailAddress from "view/orderDetail/component/OrderDetailAddress";
import OrderDetailDelivery from "view/orderDetail/component/OrderDetailDelivery";
import OrderDetailVendorName from "view/orderDetail/component/OrderDetailVendorName";
import OrderDetailOrder from "view/orderDetail/component/OrderDetailOrder";
import OrderDetailTotal from "view/orderDetail/component/OrderDetailTotal";
import OrderDetailDescription from "view/orderDetail/component/OrderDetailDescription";
import OrderDetailReceipt from "view/orderDetail/component/OrderDetailReceipt";

function OrderDetailContentItems() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const {data} = useOrderDetailData();

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
    <div id="restaurantOrderDetailContentContainer" ref={ref} className="mt-headerNormal">
      <div id="restaurantOrderDetailContentPartOne">
        <OrderDetailAddress title={data?.address.title || ""} address={data?.address.address || ""} />
        <OrderDetailDelivery orderStatus={data?.orderstatus || 0} deliveryTime={deliveryTime || ""} />
      </div>
      <OrderDetailVendorName
        vendorId={data?.vendor.id || 0}
        image={data?.vendor.logo}
        title={data?.vendor.name || ""}
      />
      <OrderDetailOrder order={data?.productKinds || []} />
      <OrderDetailTotal price={Math.round((data?.topayprice || 0) / 10)} />
      <OrderDetailDescription text={data?.description?.trim()} />
      <OrderDetailReceipt receipt={data?.id || 0} />
    </div>
  );
}

export default OrderDetailContentItems;
