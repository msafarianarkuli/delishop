import Link from "next/link";
import {IconRoundedLeft} from "assets/icons";
import classNames from "classnames";
import useTypeColor from "hooks/useTypeColor";
import {useMemo} from "react";
import {supermarketVendorIds} from "utils/Const";

interface IOrderDetailVendorName {
  image?: string;
  title: string;
  vendorId: number;
  vendorCategory: number;
}

function OrderDetailVendorName(props: IOrderDetailVendorName) {
  const {title, image, vendorId, vendorCategory} = props;
  const typeColor = useTypeColor();
  const iconClassName = classNames({
    "w-7 h-7": true,
    "text-primary": typeColor === "default",
    "text-primarySupermarket": typeColor === "supermarket",
  });

  const href = useMemo(() => {
    if (supermarketVendorIds.includes(vendorCategory)) {
      return `/supermarket/${vendorId}`;
    } else {
      return `/restaurant/${vendorId}`;
    }
  }, [vendorId]);

  return (
    <div className="flex items-center justify-between px-screenSpace mt-8 mb-5">
      <div className="flex items-center font-medium">
        <img src={image} alt={title} className="w-[60px] h-[60px] object-center object-cover rounded-[6px]" />
        <span className="text-[17px] mx-2">{title}</span>
        {/*<span className="text-[15px] text-textColorLight">({address})</span>*/}
      </div>
      <Link href={href}>
        <IconRoundedLeft className={iconClassName} />
      </Link>
    </div>
  );
}

export default OrderDetailVendorName;
