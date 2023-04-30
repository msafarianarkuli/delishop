import {Fragment, useMemo} from "react";
import SupermarketCategoryItemHeader from "view/supermarketCategory/component/SupermarketCategoryItemHeader";
import SupermarketCategoryCard from "view/supermarketCategory/component/supermarketCategoryCard";
import Link from "next/link";
import {useSupermarketCategoryData} from "view/supermarketCategory/context/SupermarketCategoryDataProvider";
import {
  removeCartSupermarketLastOrder,
  selectCartSupermarketCart,
  setCartSupermarketItem,
  setCartSupermarketVendorData,
} from "redux/cartSupermraket/cartSupermarketReducer";
import {useDispatch, useSelector} from "react-redux";
import {useSupermarketCategorySubcategoryFilter} from "view/supermarketCategory/context/SupermarketCategorySubcategoryFilterProvider";
import {useSupermarketCategoryId} from "view/supermarketCategory/context/SupermarketCategoryIdProvider";
import {useSupermarketCategoryListData} from "view/supermarketCategory/context/SupermarketCategoryListDataProvider";
import useVendorWorkTime from "hooks/useVendorWorkTime";

function SupermarketCategoryProductsList() {
  const {data} = useSupermarketCategoryData();
  const {data: supermarketData} = useSupermarketCategoryListData();
  const cart = useSelector(selectCartSupermarketCart);
  const dispatch = useDispatch();
  const filterId = useSupermarketCategorySubcategoryFilter();
  const {categoryId, vendorId} = useSupermarketCategoryId();
  const {time} = useVendorWorkTime({open_hours: supermarketData?.vendor.open_hours});

  const finalData = useMemo(() => {
    if (filterId) {
      return data?.filter((item) => item.id === filterId);
    }
    return data;
  }, [data, filterId]);

  return (
    <>
      {finalData?.map((value, index) => {
        if (!value.products.length) return null;
        return (
          <Fragment key={index}>
            <SupermarketCategoryItemHeader
              href={`/supermarket/${vendorId}/${categoryId}/${value.id}/`}
              title={value.displayname}
            />
            <div className="flex overflow-auto py-5 pr-screenSpace">
              {value.products?.map((item, index) => {
                const product = item.productKind[0];
                const addedPercent = item.priceClass / 100;
                const finalPrice = product.price + product.price * addedPercent;
                const count = cart.cartOrders[product.id]?.length || 0;
                return (
                  <Link key={index} href={`/supermarket/product/${item.id}`} prefetch={false}>
                    <SupermarketCategoryCard
                      disabled={!time.length || !supermarketData?.vendor.open}
                      title={item.displayname}
                      image={product.photo_igu}
                      price={finalPrice}
                      coin={item.point}
                      description={item.description_te}
                      count={count}
                      onAddClick={() => {
                        if (vendorId) {
                          if (vendorId !== cart.vendorId) {
                            dispatch(
                              setCartSupermarketVendorData({
                                title: supermarketData?.vendor.name || "",
                                vendorId,
                                point: supermarketData?.vendor.point || 0,
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
          </Fragment>
        );
      })}
    </>
  );
}

export default SupermarketCategoryProductsList;
