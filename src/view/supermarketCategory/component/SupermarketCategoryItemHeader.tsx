import {IconRoundedLeft} from "assets/icons";
import Link from "next/link";

interface ISupermarketCategoryItemHeader {
  title: string;
  href: string;
}

function SupermarketCategoryItemHeader(props: ISupermarketCategoryItemHeader) {
  const {title, href} = props;
  return (
    <div className="flex items-center justify-between pt-5 px-screenSpace">
      <div className="flex items-center">
        <div className="w-[7px] h-[7px] bg-primarySupermarket rounded-full" />
        <span className="text-[17px] font-bold mr-1">{title}</span>
      </div>
      <Link href={href} className="flex items-center text-primarySupermarket">
        <span className="text-[15px] font-semibold">همه</span>
        <IconRoundedLeft className="w-5 h-5" />
      </Link>
    </div>
  );
}

export default SupermarketCategoryItemHeader;
