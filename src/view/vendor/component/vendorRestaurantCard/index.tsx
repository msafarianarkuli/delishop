import {IGetVendorsDetailVendorOpenHours} from "types/interfaceVendorDetail";
import useVendorWorkTime from "hooks/useVendorWorkTime";
import {useMemo} from "react";
import classNames from "classnames";
import {IconClock, IconCoin, IconStarFill, IconStarOutline} from "assets/icons";
import styles from "view/vendor/component/vendorRestaurantCard/vendorRestaurantCard.module.scss";

interface IVendorRestaurantCard {
  image?: string;
  title: string;
  description: string;
  star: number;
  time: string;
  coin: number;
  open: boolean;
  openHours: IGetVendorsDetailVendorOpenHours;
}

const maxStar = 5;

function VendorRestaurantCard(props: IVendorRestaurantCard) {
  const {time, star, coin, title, image, description, open, openHours} = props;
  const {time: vendorWorkTime} = useVendorWorkTime({open_hours: openHours});

  const starFill = useMemo(() => Array.from(new Array(star < maxStar ? Math.round(star) : 0), (_, i) => i + 1), [star]);
  const starEmpty = useMemo(
    () => Array.from(new Array(star < maxStar ? maxStar - Math.round(star) : maxStar), (_, i) => i + 1),
    [star]
  );

  const vendorIsClose = useMemo(() => !vendorWorkTime.length || !open, [open, vendorWorkTime.length]);

  const container = classNames({
    [styles.vendor_restaurant_card_container]: true,
    [styles.vendor_restaurant_card_container_disabled]: vendorIsClose,
  });

  return (
    <div className={`${container} mt-0`}>
      <div className="relative w-full pb-[34.1%] overflow-hidden rounded-t-[12px]">
        <img src={image} alt="image" className="absolute inset-0 object-center object-cover w-full h-full" />
      </div>
      <div className={styles.vendor_restaurant_card_content}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-bold">{title}</span>
            {/*<span className="text-[12px] font-light text-textColorLight mr-2">{address}</span>*/}
          </div>
          <div className="flex items-center flex-row-reverse">
            {starFill.map((item) => (
              <IconStarFill key={item} className="w-3 h-auto mr-[1px] last:mr-0" />
            ))}
            {starEmpty.map((item) => (
              <IconStarOutline key={item} className="w-3 h-auto mr-[1px] last:mr-0" />
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          {vendorIsClose ? (
            <div className="flex items-center bg-gray-300 px-3 rounded">بسته است</div>
          ) : (
            <div className="text-textColorLight text-[13px] font-light truncate">{description}</div>
          )}
          <div className="flex items-center">
            <div className="flex items-center inner_box">
              <IconCoin className="w-4 h-4 ml-1" />
              <span className="text-[12px]">{coin}</span>
            </div>
            <div className="flex items-center inner_box mr-2">
              <span className="text-[12px] whitespace-nowrap">تا {time} دقیقه</span>
              <IconClock className="w-4 h-4 text-iconColor mr-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorRestaurantCard;
