import Link from "next/link";
import SuperMarketDetailCard from "view/supermarketDetail/component/supermarketDetailCard";
import SupermarketDetailCategoryTitle from "view/supermarketDetail/component/SupermarketDetailCategoryTitle";
import {useSupermarketDetailData} from "view/supermarketDetail/context/SupermarketDetailDataProvider";

function SupermarketDetailList() {
  const {data} = useSupermarketDetailData();
  return (
    <>
      <SupermarketDetailCategoryTitle title="دسته بندی" />
      <div className="flex flex-wrap px-4 pt-6">
        {data?.menus?.groups.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/supermarket/${data?.vendor.id}/${item.id}`}
              className="block w-1/2 mobile:w-1/3 px-1 min-[580px]:mb-16 mb-12"
            >
              <SuperMarketDetailCard title={item.displayname} image={item.logo} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SupermarketDetailList;
