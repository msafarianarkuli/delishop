import {OrderActive} from "components";
import useVendorNavigation from "hooks/useVendorNavigation";
import {useVendorOrderActiveParams} from "view/vendorOrderActive/context/VendorOrderActiveParamsProvider";
import {ReactQueryKey} from "utils/Const";

function VendorOrderActive() {
  const {vendor} = useVendorOrderActiveParams();
  const data = useVendorNavigation({active: "order", vendor});

  return (
    <OrderActive
      activeLink={`/${vendor}/order/active`}
      previousLink={`/${vendor}/order/previous`}
      queryKey={[ReactQueryKey.VENDOR_ORDER_ACTIVE]}
      categoryId={[]}
      color="default"
      bottomNavigationData={data}
    />
  );
}

export default VendorOrderActive;
