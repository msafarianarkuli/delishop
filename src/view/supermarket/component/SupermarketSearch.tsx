import {IconSearch} from "assets/icons";
import Link from "next/link";

function SupermarketSearch() {
  return (
    <Link
      href="/supermarket/search"
      className="flex items-center w-full border-0 rounded-full h-[55px] inner_box text-iconColor px-5 mb-5"
    >
      <IconSearch className="w-7 h-auto" />
      <span className="mr-2 font-medium text-[11px]">جستجو</span>
    </Link>
  );
}

export default SupermarketSearch;
