import Link from "next/link";
import {useVendorDetailSupermarketData} from "view/vendorDetail/vendorDetailSupermarket/context/VendorDetailSupermarketDataProvider";
import {useVendorDetailParams} from "view/vendorDetail/context/VendorDetailParamsProvider";
import VendorDetailSupermarketCard from "view/vendorDetail/vendorDetailSupermarket/component/vendorDetailSupermarketCard";
import VendorDetailSupermarketCategoryTitle from "view/vendorDetail/vendorDetailSupermarket/component/VendorDetailSupermarketCategoryTitle";

function VendorDetailSupermarketList() {
  const {data} = useVendorDetailSupermarketData();
  const {vendor, id} = useVendorDetailParams();

  return (
    <>
      <VendorDetailSupermarketCategoryTitle title="دسته بندی" />
      <div className="flex flex-wrap px-4 pt-6">
        {data?.menus?.groups.map((item, index) => {
          return (
            <Link
              key={index}
              // href={`/supermarket/${data?.vendor.id}/${item.id}`}
              href={`/${vendor}/${id}/${item.id}`}
              className="block w-1/2 mobile:w-1/3 px-1 min-[580px]:mb-16 mb-12"
              prefetch={false}
            >
              <VendorDetailSupermarketCard title={item.displayname} image={item.logo} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default VendorDetailSupermarketList;
