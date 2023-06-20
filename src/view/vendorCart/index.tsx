import useVendorNavigation from "hooks/useVendorNavigation";
import {useVendorCartParams} from "view/vendorCart/context/VendorCartParamsProvider";
import {BottomNavigation} from "components";
import VendorCartHeader from "view/vendorCart/component/VendorCartHeader";
import VendorCartList from "view/vendorCart/component/VendorCartList";

function VendorCart() {
  const {vendor} = useVendorCartParams();
  const data = useVendorNavigation({active: "cart", vendor});

  return (
    <>
      <VendorCartHeader />
      <div className="px-screenSpace mt-headerNormal mb-bottomNavigation">
        <VendorCartList />
      </div>
      <BottomNavigation data={data} />
    </>
  );
}

export default VendorCart;
