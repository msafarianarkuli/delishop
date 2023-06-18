import {IGetVendorsDetailVendorOpenHours} from "types/interfaceVendorDetail";
import useVendorWorkTime from "hooks/useVendorWorkTime";
import {useMemo} from "react";
import classNames from "classnames";
import {IconCoin, IconStarFill} from "assets/icons";
import IconDelivery from "assets/icons/IconDelivery";
import styles from "view/vendor/component/vendorSupermraketCard/vendorSupermarketCard.module.scss";

interface IVendorSupermarketCard {
  image?: string;
  title: string;
  rate: string;
  deliveryPrice: number;
  coin: number;
  open: boolean;
  openHours: IGetVendorsDetailVendorOpenHours;
}

function VendorSupermarketCard(props: IVendorSupermarketCard) {
  const {rate, deliveryPrice, title, coin, image, openHours, open} = props;
  const {time: vendorWorkTime} = useVendorWorkTime({open_hours: openHours});

  const vendorIsClose = useMemo(() => !vendorWorkTime.length || !open, [open, vendorWorkTime.length]);

  const container = classNames({
    [styles.vendor_supermarket_card_container]: true,
    [styles.vendor_supermarket_card_container_disabled]: vendorIsClose,
  });

  const rateFixed = useMemo(() => {
    const tmp = +rate;
    if (!isNaN(tmp)) {
      return tmp.toFixed(2);
    }
    return null;
  }, [rate]);

  return (
    <div className={container}>
      <div className="flex">
        <img src={image} alt={title} className="w-[144px] h-[80px] rounded-bl-[10px] object-center object-cover" />
        <div className="text-[15px] font-medium mx-2 mt-1">
          <span>{title}</span>
          {/*<span className="text-iconColor mr-1">({address})</span>*/}
        </div>
      </div>
      <div className="flex items-center justify-between font-medium py-2 px-3">
        <div className="flex items-center text-[11px]">
          <IconCoin className="w-4 h-4 ml-1" />
          <span>جایزه خرید</span>
          <span className="mx-1">{coin}</span>
          <span>سکه</span>
        </div>
        <div className="flex items-center">
          <div className="inner_box flex items-center text-[11px]">
            <IconDelivery className="w-3 h-auto" />
            <span className="mx-1">{deliveryPrice.toLocaleString("en-US")}</span>
            <span>تومان</span>
          </div>
          <div className="inner_box flex items-center mr-2">
            <span className="text-[13px] h-4">{rateFixed}</span>
            <IconStarFill className="w-3 h-auto mr-1" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorSupermarketCard;
