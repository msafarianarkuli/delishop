import React, {useEffect, useMemo} from "react";
import SupermarketSubcategoryCard from "view/supermarketSubcategory/component/SupermarketSubcategoryCard";
import Link from "next/link";
import {useSupermarketSubcategoryData} from "view/supermarketSubcategory/context/SupermarketSubcategoryDataProvider";
import {useDispatch, useSelector} from "react-redux";
import {
  removeCartSupermarketLastOrder,
  selectCartSupermarketCart,
  setCartSupermarketItem,
  setCartSupermarketVendorData,
} from "redux/cartSupermraket/cartSupermarketReducer";
import {useRouter} from "next/router";
import {useSupermarketSubcategoryCategoryList} from "view/supermarketSubcategory/context/SupermarketSubcategoryCategoryListDataProvider";
import useVendorWorkTime from "hooks/useVendorWorkTime";
import {useInView} from "react-intersection-observer";

function SupermarketSubcategoryList() {
  const {data, isLoading} = useSupermarketSubcategoryData();

  return (
    <div className="flex flex-wrap">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.products.length ? <div>موردی یافت نشد</div> : null}
      <SupermarketSubcategoryListShow />
    </div>
  );
}

function SupermarketSubcategoryListShow() {
  const {data, fetchNextPage} = useSupermarketSubcategoryData();
  const {ref, inView} = useInView();
  const {data: supermarket} = useSupermarketSubcategoryCategoryList();
  const cart = useSelector(selectCartSupermarketCart);
  const dispatch = useDispatch();
  const router = useRouter();
  const {time} = useVendorWorkTime({open_hours: supermarket?.vendor.open_hours});

  const vendorId = useMemo(() => {
    const id = router.query.id;
    if (id && !Array.isArray(id)) {
      return id;
    }
    return "";
  }, [router.query.id]);

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
          const count = cart.cartOrders[product.id]?.length || 0;
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <Link
              ref={tmpRef}
              key={idx}
              className="block w-1/2 min-[428px]:w-1/3 p-[5px]"
              href={`/supermarket/product/${item}`}
              prefetch={false}
            >
              <SupermarketSubcategoryCard
                disabled={!time.length || !supermarket?.vendor.open}
                title={item.displayname}
                description={item.description_te}
                image={product.photo_igu}
                coin={item.point}
                price={Math.round(finalPrice / 10)}
                count={count}
                onAddClick={() => {
                  if (vendorId) {
                    if (vendorId !== cart.vendorId) {
                      dispatch(
                        setCartSupermarketVendorData({
                          title: supermarket?.vendor.name || "",
                          vendorId,
                          point: supermarket?.vendor.point || 0,
                        })
                      );
                    }
                    dispatch(
                      setCartSupermarketItem({
                        title: item.displayname,
                        price: finalPrice,
                        id: product.id,
                        image: product.photo_igu,
                        point: item.point || 0,
                      })
                    );
                  }
                }}
                onMinusClick={() => {
                  dispatch(removeCartSupermarketLastOrder(product.id));
                }}
              />
            </Link>
          );
        });
      })}
    </>
  );
}

export default SupermarketSubcategoryList;
