import {Fragment, useEffect, useRef} from "react";
import RestaurantDetailListTag from "view/restaurantDetail/component/RestaurantDetailListTag";
import RestaurantDetailCard from "view/restaurantDetail/component/restaurantDetailCard/RestaurantDetailCard";
import styles from "view/restaurantDetail/restaurantDetail.module.scss";
import Link from "next/link";
import {useRestaurantDetailData} from "view/restaurantDetail/context/RestaurantDetailDataProvider";

interface IRestaurantDetailList {
  onClick: () => void;
}

function RestaurantDetailList({onClick}: IRestaurantDetailList) {
  const ref = useRef<HTMLDivElement>(null);
  const {data} = useRestaurantDetailData();

  useEffect(() => {
    const div = ref.current! as HTMLDivElement;

    function scroll() {
      const diffTop = div.getBoundingClientRect().top;
      const tab = document.getElementById("restaurantDetailTab")!;
      if (diffTop > 125 && tab.classList.contains(styles.restaurant_detail_tab_fixed)) {
        tab.classList.remove(styles.restaurant_detail_tab_fixed);
      }
      if (diffTop <= 125 && !tab.classList.contains(styles.restaurant_detail_tab_fixed)) {
        tab.classList.add(styles.restaurant_detail_tab_fixed);
      }
    }

    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div ref={ref} className="mb-[100px] px-screenSpace">
      {data?.menus.groups.map((item) => {
        if (item?.products.length === 0) return null;
        return (
          <Fragment key={item.name}>
            <RestaurantDetailListTag id={item.name} title={item.displayname} />
            {item.products.map((item) => {
              return (
                <Link key={item.id} href={`product/${item.id}`} className="block mb-5">
                  <RestaurantDetailCard
                    image={item.productKinds[0]?.photo_igu}
                    title={item.displayname}
                    description={item.productKinds[0]?.description}
                    coin={item.productKinds[0]?.quality}
                    price={item.productKinds[0]?.price}
                    count={0}
                    onAddExtraItems={onClick}
                  />
                </Link>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
}

export default RestaurantDetailList;
