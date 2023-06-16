import {useDispatch, useSelector} from "react-redux";
import {
  removeCartSupermarketLastOrder,
  selectCartSupermarketCart,
  setCartSupermarketItem,
  setCartSupermarketVendorData,
} from "redux/cartSupermraket/cartSupermarketReducer";
import useVendorWorkTime from "hooks/useVendorWorkTime";
import {Fragment, useMemo} from "react";
import Link from "next/link";
import {useVendorCategoryParams} from "view/vendorCategory/context/VendorCategoryParamsProvider";
import {useVendorCategoryData} from "view/vendorCategory/context/VendorCategoryDataProvider";
import {useVendorCategoryListData} from "view/vendorCategory/context/VendorCategoryListDataProvider";
import {useVendorCategorySubcategoryFilter} from "view/vendorCategory/context/VendorCategorySubcategoryFilterProvider";
import VendorCategoryItemHeader from "view/vendorCategory/component/VendorCategoryItemHeader";
import VendorCategoryCard from "view/vendorCategory/component/vendorCategoryCard";

function VendorCategoryProductsList() {
  const {data} = useVendorCategoryData();
  const {data: supermarketData} = useVendorCategoryListData();
  const cart = useSelector(selectCartSupermarketCart);
  const dispatch = useDispatch();
  const filterId = useVendorCategorySubcategoryFilter();
  const {vendor, categoryId, vendorId} = useVendorCategoryParams();
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
            <VendorCategoryItemHeader
              href={`/${vendor}/${vendorId}/${categoryId}/${value.id}/`}
              title={value.displayname}
            />
            <div className="flex overflow-auto py-5 pr-screenSpace">
              {value.products?.map((item, index) => {
                const product = item.productKind[0];
                const addedPercent = item.priceClass / 100;
                const finalPrice = product.price + product.price * addedPercent;
                const count = cart.cartOrders[product.id]?.length || 0;
                return (
                  <Link key={index} href={`/${vendor}/product/${item.id}`} prefetch={false}>
                    <VendorCategoryCard
                      disabled={!time.length || !supermarketData?.vendor.open}
                      title={item.displayname}
                      image={product.photo_igu}
                      price={Math.round(finalPrice / 10)}
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

export default VendorCategoryProductsList;
