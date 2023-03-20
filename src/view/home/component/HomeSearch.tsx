import {IconSearch} from "assets/icons";
import Link from "next/link";

function HomeSearch() {
  return (
    <div className="pt-headerNormal px-screenSpace">
      <Link
        href="/search"
        prefetch={false}
        className="flex items-center w-full border-0 rounded-full h-[55px] inner_box text-textColorLight px-5 mt-5"
      >
        <IconSearch className="w-7 h-auto" />
        <span className="mr-2">جستجو</span>
      </Link>
    </div>
  );
}

export default HomeSearch;
