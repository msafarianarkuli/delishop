import React, {useEffect} from "react";
import Link from "next/link";
import RestaurantCard from "view/restaurant/component/restaurantCard/RestaurantCard";
import {useRestaurantData} from "view/restaurant/context/RestaurantDataProvider";
import {useInView} from "react-intersection-observer";

function RestaurantList() {
  const {data, isLoading} = useRestaurantData();

  return (
    <div className="flex flex-col flex-1 px-screenSpace overflow-auto pt-[160px]">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.vendors.length ? <div>موردی یافت نشد</div> : null}
      <RestaurantListShow />
    </div>
  );
}

function RestaurantListShow() {
  const {data, fetchNextPage} = useRestaurantData();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      {data?.pages?.map((value, index, array) => {
        return value.vendors.map((item, idx, arr) => {
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <Link ref={tmpRef} key={item.id} href={`/restaurant/${item.id}`} prefetch={false}>
              <RestaurantCard
                image={item.banner}
                title={item.name}
                description={item.about}
                star={+item.rate}
                coin={item.point}
                time={item.max_sendtime}
              />
            </Link>
          );
        });
      })}
    </>
  );
}

export default RestaurantList;
