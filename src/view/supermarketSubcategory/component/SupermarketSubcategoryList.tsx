import React, {useMemo} from "react";
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

function SupermarketSubcategoryList() {
  const {data} = useSupermarketSubcategoryData();
  const {data: supermarket} = useSupermarketSubcategoryCategoryList();
  const cart = useSelector(selectCartSupermarketCart);
  const dispatch = useDispatch();
  const router = useRouter();

  const vendorId = useMemo(() => {
    const id = router.query.id;
    if (id && !Array.isArray(id)) {
      return id;
    }
    return "";
  }, [router.query.id]);

  return (
    <div className="flex flex-wrap">
      {data?.products.map((item, index) => {
        const product = item.productKind[0];
        const addedPercent = item.priceClass / 100;
        const finalPrice = product.price + product.price * addedPercent;
        const count = cart.cartOrders[product.id]?.length || 0;
        return (
          <Link
            key={index}
            className="block w-1/2 min-[428px]:w-1/3 p-[5px]"
            href={`/supermarket/product/${item}`}
            prefetch={false}
          >
            <SupermarketSubcategoryCard
              title={item.displayname}
              description={item.description_te}
              image={product.photo_igu}
              coin={item.point}
              price={finalPrice}
              count={count}
              onAddClick={() => {
                if (vendorId) {
                  if (vendorId !== cart.vendorId) {
                    dispatch(
                      setCartSupermarketVendorData({
                        title: supermarket?.vendor.name || "",
                        vendorId,
                        point: supermarket?.vendor.point || 0,
                        latitude: supermarket?.vendor.lat,
                        longitude: supermarket?.vendor.long,
                        openHours: supermarket?.vendor.open_hours,
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
      })}
    </div>
  );
}

export default SupermarketSubcategoryList;
