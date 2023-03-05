import {Fragment, useEffect, useRef} from "react";
import RestaurantDetailListTag from "view/restaurantDetail/component/RestaurantDetailListTag";
import RestaurantDetailCard from "view/restaurantDetail/component/restaurantDetailCard/RestaurantDetailCard";
import styles from "view/restaurantDetail/restaurantDetail.module.scss";
import Link from "next/link";
import {useRestaurantDetailData} from "view/restaurantDetail/context/RestaurantDetailDataProvider";
import {
  setRestaurantDetailExtraData,
  useRestaurantDetailExtraAction,
} from "view/restaurantDetail/context/RestaurantDetailExtraProvider";
import {useDispatch} from "react-redux";
import {
  removeCartRestaurantLastItem,
  setCartRestaurantItem,
  setCartRestaurantVendorData,
} from "redux/cart/cartRestaurantReducer";
import {useRouter} from "next/router";
import useCartRestaurant from "hooks/useCartRestaurant";

function RestaurantDetailList() {
  const ref = useRef<HTMLDivElement>(null);
  const {data} = useRestaurantDetailData();
  const dispatchModal = useRestaurantDetailExtraAction();
  const dispatch = useDispatch();
  const router = useRouter();
  const vendor = useCartRestaurant();

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
              if (!item.productKinds.length) return null;
              const product = item.productKinds[0];
              const price = product?.price || 0;
              const addedPercent = item.price_class / 100;
              const finalPrice = price + price * addedPercent;
              const count = vendor?.cartOrders[product.id]?.length || 0;
              return (
                <Link key={item.id} href={`product/${item.id}`} className="block mb-5">
                  <RestaurantDetailCard
                    image={product?.photo_igu}
                    title={item.displayname}
                    description={product?.description}
                    coin={item?.point}
                    price={finalPrice}
                    count={count}
                    onAddClick={() => {
                      const id = router.query.id;
                      if (id && !Array.isArray(id)) {
                        if (!vendor) {
                          dispatch(
                            setCartRestaurantVendorData({
                              vendorId: id,
                              title: data?.vendor?.name,
                            })
                          );
                        }
                        if (item.extras?.length) {
                          dispatchModal(
                            setRestaurantDetailExtraData({
                              data: [...item.extras],
                              id: product.id,
                              price: finalPrice,
                              title: item.displayname,
                            })
                          );
                        } else {
                          dispatch(
                            setCartRestaurantItem({
                              id: product.id,
                              price: finalPrice,
                              title: item.displayname,
                              vendorId: id,
                            })
                          );
                        }
                      }
                    }}
                    onMinusClick={() => {
                      const id = router.query.id;
                      if (id && !Array.isArray(id)) {
                        dispatch(removeCartRestaurantLastItem({id: product.id, vendorId: id}));
                      }
                    }}
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
