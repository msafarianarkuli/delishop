import {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {useVendorData} from "view/vendor/context/VendorDataProvider";
import Link from "next/link";
import VendorRestaurantCard from "view/vendor/component/vendorRestaurantCard";
import {useRouter} from "next/router";
import useVendorType from "hooks/useVendorType";

function VendorList() {
  const {data, isLoading} = useVendorData();

  return (
    <div className="flex flex-col flex-1 px-screenSpace overflow-auto pt-[160px]">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.vendors.length ? <div>موردی یافت نشد</div> : null}
      <VendorListShow />
    </div>
  );
}

function VendorListShow() {
  const {data, fetchNextPage} = useVendorData();
  const {ref, inView} = useInView();
  const router = useRouter();
  const vendorType = useVendorType();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (vendorType?.isRestaurant) {
    return (
      <>
        {data?.pages?.map((value, index, array) => {
          return value.vendors.map((item, idx, arr) => {
            const condition = array.length - 1 === index && arr.length - 1 === idx;
            const tmpRef = condition ? ref : null;
            return (
              <Link ref={tmpRef} key={item.id} href={`/${router.query.vendor}/${item.id}`} prefetch={false}>
                <VendorRestaurantCard
                  image={item.banner}
                  title={item.name}
                  description={item.about}
                  star={+item.rate}
                  coin={item.point}
                  time={item.max_sendtime}
                  open={!!item.open}
                  openHours={item.open_hours}
                />
              </Link>
            );
          });
        })}
      </>
    );
  }

  return null;
}

export default VendorList;
