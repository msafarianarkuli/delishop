import {Fragment, useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import useCartRestaurant from "hooks/useCartRestaurant";
import useVendorWorkTime from "hooks/useVendorWorkTime";
import {
  removeCartRestaurantCartListCartOrder,
  removeCartRestaurantCartListLastOrder,
  setCartRestaurantItem,
  setCartRestaurantVendorData,
} from "redux/cartRestaurant/cartRestaurantReducer";
// import Link from "next/link";
import VendorDetailRestaurantListTag from "view/vendorDetail/vendorDetailRestaurant/component/VendorDetailRestaurantListTag";
import VendorDetailRestaurantCard from "view/vendorDetail/vendorDetailRestaurant/component/vendorDetailRestaurantCard";
import {useVendorDetailRestaurantData} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantDataProvider";
import {
  setVendorDetailRestaurantExtraData,
  useVendorDetailRestaurantExtra,
  useVendorDetailRestaurantExtraAction,
} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantExtraProvider";
import styles from "view/vendorDetail/vendorDetailRestaurant/VendorDetailRestaurant.module.scss";
import {useVendorDetailParams} from "view/vendorDetail/context/VendorDetailParamsProvider";
import VendorProductBottomSheet from "view/product/VendorProductBottomSheet";

function VendorDetailRestaurantList() {
  const ref = useRef<HTMLDivElement>(null);
  const {data} = useVendorDetailRestaurantData();
  const dispatchModal = useVendorDetailRestaurantExtraAction();
  const dispatch = useDispatch();
  const router = useRouter();
  const vendor = useCartRestaurant();
  const {isOpen} = useVendorDetailRestaurantExtra();
  const {vendor: vendorName} = useVendorDetailParams();
  const {openTime} = useVendorWorkTime({open_hours: data?.vendor.open_hours});

  useEffect(() => {
    const div = ref.current! as HTMLDivElement;

    function scroll() {
      const diffTop = div.getBoundingClientRect().top;
      const tab = document.getElementById("restaurantDetailTab")!;
      if (diffTop > 125 && tab.classList.contains(styles.vendor_detail_restaurant_tab_fixed)) {
        tab.classList.remove(styles.vendor_detail_restaurant_tab_fixed);
      }
      if (diffTop <= 125 && !tab.classList.contains(styles.vendor_detail_restaurant_tab_fixed)) {
        tab.classList.add(styles.vendor_detail_restaurant_tab_fixed);
      }
    }

    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  useEffect(() => {
    if (vendor?.vendorId && vendor.cartOrders && !Object.keys(vendor.cartOrders).length && !isOpen) {
      dispatch(removeCartRestaurantCartListCartOrder(vendor.vendorId));
    }
  }, [dispatch, isOpen, vendor?.cartOrders, vendor?.vendorId]);

  const [bottomSheet, setBottomSheet] = useState(false);

  useEffect(() => {
    setBottomSheet(false);
  }, [router.asPath]);

  const [product, setProduct] = useState({});

  const handleProductData = (item: any) => {
    setProduct(item);
    setBottomSheet(true);
    console.log(item);
  };

  return (
    <div ref={ref} className="mb-[100px] px-screenSpace">
      {data?.menus.groups.map((item) => {
        if (item?.products.length === 0) return null;
        return (
          <Fragment key={item.name}>
            <VendorDetailRestaurantListTag id={item.name} title={item.displayname} />
            {item.products.map((item) => {
              if (!item.productKinds.length) return null;
              const product = item.productKinds[0];
              const price = product?.price || 0;
              const addedPercent = item.price_class / 100;
              const finalPrice = price + price * addedPercent;
              const count = vendor?.cartOrders[product.id]?.length || 0;
              return (
                <div key={item.id} className="block mb-5">
                  <VendorDetailRestaurantCard
                    disabled={!openTime || !data?.vendor.open || count >= product.count}
                    image={product?.photo_igu}
                    title={item.displayname}
                    description={item?.description_te}
                    coin={item?.point}
                    stock={product.count}
                    price={Math.round(finalPrice / 10)}
                    count={count}
                    discount_num={item.discount_num}
                    onAddClick={() => {
                      const id = router.query.id;
                      if (id && !Array.isArray(id)) {
                        if (!vendor) {
                          dispatch(
                            setCartRestaurantVendorData({
                              vendorAddressName: vendorName,
                              vendorId: id,
                              title: data?.vendor?.name,
                              point: data?.vendor.point,
                            })
                          );
                        }
                        if (item.extras?.length) {
                          dispatchModal(
                            setVendorDetailRestaurantExtraData({
                              data: [...item.extras],
                              id: product.id,
                              price: finalPrice,
                              title: item.displayname,
                              point: item.point,
                              image: product?.photo_igu || "",
                            })
                          );
                        } else {
                          dispatch(
                            setCartRestaurantItem({
                              id: product.id,
                              price: finalPrice,
                              title: item.displayname,
                              vendorId: id,
                              point: item.point,
                              image: product?.photo_igu,
                            })
                          );
                        }
                      }
                    }}
                    onMinusClick={() => {
                      const id = router.query.id;
                      if (id && !Array.isArray(id)) {
                        dispatch(removeCartRestaurantCartListLastOrder({id: product.id, vendorId: id}));
                      }
                    }}
                    onClick={() => handleProductData(item)}
                  />
                </div>
                // <Link key={item.id} href={`/${vendorName}/product/${item.id}`} className="block mb-5">

                // </Link>
              );
            })}
          </Fragment>
        );
      })}
      <VendorProductBottomSheet
        open={bottomSheet}
        onClose={() => setBottomSheet(false)}
        data={product}
        isRestaurant={true}
      />
    </div>
  );
}

export default VendorDetailRestaurantList;
