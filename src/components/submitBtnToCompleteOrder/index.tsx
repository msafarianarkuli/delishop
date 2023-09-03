import {useRouter} from "next/router";
import useCartRestaurant from "hooks/useCartRestaurant";
import useVendorWorkTime from "hooks/useVendorWorkTime";
import {IGetVendorsDetailVendorOpenHours} from "types/interfaceVendorDetail";
import {SubmitBuyBtn} from "components/index";
import {IconDownload} from "assets/icons";

interface ISubmitBtnToCompleteOrder {
  open_hours?: IGetVendorsDetailVendorOpenHours;
  open?: number;
  className?: string;
  vendorName: string;
}

function SubmitBtnToCompleteOrder(props: ISubmitBtnToCompleteOrder) {
  const {open_hours, className, open, vendorName} = props;
  const router = useRouter();
  const vendor = useCartRestaurant();
  const {time} = useVendorWorkTime({open_hours});

  console.log(vendor);

  if (!vendor?.totalPrice) return null;

  return (
    <SubmitBuyBtn
      className={className}
      disabled={!time.length || !open}
      onClick={() => router.push(`/${vendorName}/ordercomplete/${router.query.id}`)}
      right={<IconDownload className="w-5 h-5" />}
      body={
        <>
          <span>تکمیل خرید</span>(<span>{vendor.totalOrderCount}</span>)
        </>
      }
      left={
        <>
          <span>{Math.round(vendor.totalPrice).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
    />
  );
}

export default SubmitBtnToCompleteOrder;
