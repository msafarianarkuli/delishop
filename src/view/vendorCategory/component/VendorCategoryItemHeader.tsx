import Link from "next/link";
import {IconRoundedLeft} from "assets/icons";

interface IVendorCategoryItemHeader {
  title: string;
  href: string;
}

function VendorCategoryItemHeader(props: IVendorCategoryItemHeader) {
  const {title, href} = props;
  return (
    <div className="flex items-center justify-between pt-5 px-screenSpace">
      <div className="flex items-center">
        <div className="w-[7px] h-[7px] bg-primary rounded-full" />
        <span className="text-[17px] font-bold mr-1">{title}</span>
      </div>
      <Link href={href} className="flex items-center text-primary">
        <span className="text-[15px] font-semibold">همه</span>
        <IconRoundedLeft className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default VendorCategoryItemHeader;
