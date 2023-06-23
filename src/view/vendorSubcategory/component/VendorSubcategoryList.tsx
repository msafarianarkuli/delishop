import React, {useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {useDispatch} from "react-redux";
import useVendorWorkTime from "hooks/useVendorWorkTime";
import Link from "next/link";
import {useVendorSubcategoryData} from "view/vendorSubcategory/context/VendorSubcategoryDataProvider";
import {useVendorSubcategoryCategoryListData} from "view/vendorSubcategory/context/VendorSubcategoryCategoryListDataProvider";
import {useVendorSubcategoryParams} from "view/vendorSubcategory/context/VendorSubcategoryParamsProvider";
import VendorSubcategoryCard from "view/vendorSubcategory/component/vendorSubcategoryCard";
import {
  removeCartRestaurantCartListLastOrder,
  setCartRestaurantItem,
  setCartRestaurantVendorData,
} from "redux/cartRestaurant/cartRestaurantReducer";
import useCartRestaurant from "hooks/useCartRestaurant";

function VendorSubcategoryList() {
  const {data, isLoading} = useVendorSubcategoryData();

  return (
    <div className="flex flex-wrap">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.products.length ? <div>موردی یافت نشد</div> : null}
      <VendorSubcategoryShow />
    </div>
  );
}

export default VendorSubcategoryList;

function VendorSubcategoryShow() {
  const {data, fetchNextPage} = useVendorSubcategoryData();
  const {ref, inView} = useInView();
  const vendor = useCartRestaurant();
  const {data: supermarket} = useVendorSubcategoryCategoryListData();
  const {vendor: vendorName, vendorId} = useVendorSubcategoryParams();
  const dispatch = useDispatch();
  const {time} = useVendorWorkTime({open_hours: supermarket?.vendor.open_hours});

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      {data?.pages.map((value, index, array) => {
        return value.products.map((item, idx, arr) => {
          const product = item.productKind[0];
          const addedPercent = item.priceClass / 100;
          const finalPrice = product.price + product.price * addedPercent;
          const count = vendor?.cartOrders[product.id]?.length || 0;
          // const count = cart.cartOrders[product.id]?.length || 0;
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <Link
              ref={tmpRef}
              key={idx}
              className="block w-1/2 min-[428px]:w-1/3 p-[5px]"
              href={`/${vendorName}/product/${item}`}
              prefetch={false}
            >
              <VendorSubcategoryCard
                disabled={!time.length || !supermarket?.vendor.open}
                title={item.displayname}
                description={item.description_te}
                image={product.photo_igu}
                coin={item.point}
                price={Math.round(finalPrice / 10)}
                count={count}
                onAddClick={() => {
                  // const id = router.query.id;
                  if (vendorId && supermarket) {
                    if (!vendor) {
                      dispatch(
                        setCartRestaurantVendorData({
                          vendorAddressName: vendorName,
                          vendorId,
                          title: supermarket?.vendor?.name,
                          point: supermarket?.vendor.point,
                        })
                      );
                    }
                    dispatch(
                      setCartRestaurantItem({
                        id: product.id,
                        price: finalPrice,
                        title: item.displayname,
                        vendorId,
                        point: item.point,
                      })
                    );
                  }
                }}
                onMinusClick={() => {
                  if (vendorId) {
                    dispatch(removeCartRestaurantCartListLastOrder({id: product.id, vendorId}));
                  }
                }}
              />
            </Link>
          );
        });
      })}
    </>
  );
}
