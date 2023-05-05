import {useRouter} from "next/router";
import Link from "next/link";
import {IconRoundedLeft} from "assets/icons";

interface IOrderDetailVendorName {
  image?: string;
  title: string;
}

function OrderDetailVendorName(props: IOrderDetailVendorName) {
  const router = useRouter();
  const {title, image} = props;
  return (
    <div className="flex items-center justify-between px-screenSpace mt-8 mb-5">
      <div className="flex items-center font-medium">
        <img src={image} alt={title} className="w-[60px] h-[60px] object-center object-cover rounded-[6px]" />
        <span className="text-[17px] mx-2">{title}</span>
        {/*<span className="text-[15px] text-textColorLight">({address})</span>*/}
      </div>
      <Link href={`/restaurant/${router.query.id}`}>
        <IconRoundedLeft className="w-7 h-7 text-primary" />
      </Link>
    </div>
  );
}

export default OrderDetailVendorName;
