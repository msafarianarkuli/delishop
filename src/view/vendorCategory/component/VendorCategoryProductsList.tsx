import {useDispatch} from "react-redux";
import useVendorWorkTime from "hooks/useVendorWorkTime";
import {Fragment, useEffect, useMemo, useState} from "react";
// import Link from "next/link";
import {useVendorCategoryParams} from "view/vendorCategory/context/VendorCategoryParamsProvider";
import {useVendorCategoryData} from "view/vendorCategory/context/VendorCategoryDataProvider";
import {useVendorCategoryListData} from "view/vendorCategory/context/VendorCategoryListDataProvider";
import {useVendorCategorySubcategoryFilter} from "view/vendorCategory/context/VendorCategorySubcategoryFilterProvider";
import VendorCategoryItemHeader from "view/vendorCategory/component/VendorCategoryItemHeader";
import VendorCategoryCard from "view/vendorCategory/component/vendorCategoryCard";
import {
  removeCartRestaurantCartListCartOrder,
  removeCartRestaurantCartListLastOrder,
  setCartRestaurantItem,
  setCartRestaurantVendorData,
} from "redux/cartRestaurant/cartRestaurantReducer";
import useCartRestaurant from "hooks/useCartRestaurant";
import {roundPrice} from "utils/utils";
import VendorProductBottomSheet from "view/product/VendorProductBottomSheet";
import {useRouter} from "next/router";

function VendorCategoryProductsList() {
  const {data} = useVendorCategoryData();
  const {data: supermarketData} = useVendorCategoryListData();

  // const cart = useSelector(selectCartSupermarketCart);
  const dispatch = useDispatch();
  const filterId = useVendorCategorySubcategoryFilter();
  const vendor = useCartRestaurant();
  const {vendor: vendorName, categoryId, vendorId} = useVendorCategoryParams();
  const {openTime} = useVendorWorkTime({open_hours: supermarketData?.vendor.open_hours});

  const finalData = useMemo(() => {
    if (filterId) {
      return data?.filter((item) => item.id === filterId);
    }
    return data;
  }, [data, filterId]);

  useEffect(() => {
    if (vendor?.vendorId && vendor.cartOrders && !Object.keys(vendor.cartOrders).length) {
      dispatch(removeCartRestaurantCartListCartOrder(vendor.vendorId));
    }
  }, [dispatch, vendor?.cartOrders, vendor?.vendorId]);

  const router = useRouter();
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
    <>
      {finalData?.map((value, index) => {
        if (!value.products.length) return null;
        return (
          <Fragment key={index}>
            <VendorCategoryItemHeader
              href={`/${vendorName}/${vendorId}/${categoryId}/${value.id}/`}
              title={value.displayname}
            />
            <div className="flex overflow-auto py-5 pr-screenSpace">
              {value.products?.map((item, index) => {
                const product = item.productKind[0];
                const addedPercent = item.priceClass / 100;
                const finalPrice = product.price + product.price * addedPercent;
                const count = vendor?.cartOrders[product.id]?.length || 0;
                // const count = cart.cartOrders[product.id]?.length || 0;
                return (
                  <div key={index}>
                    <VendorCategoryCard
                      disabled={
                        !openTime || !supermarketData?.vendor.open || product.count === 0 || count >= product.count
                      }
                      title={item.displayname}
                      image={product.photo_igu}
                      price={roundPrice(finalPrice / 10)}
                      coin={item.point}
                      description={item.description_te}
                      count={count}
                      stock={product.count}
                      onAddClick={() => {
                        // const id = router.query.id;
                        const id = vendorId;
                        if (id && !Array.isArray(id) && supermarketData) {
                          if (!vendor) {
                            dispatch(
                              setCartRestaurantVendorData({
                                vendorAddressName: vendorName,
                                vendorId: id,
                                title: supermarketData?.vendor?.name,
                                point: supermarketData?.vendor.point,
                              })
                            );
                          }
                          dispatch(
                            setCartRestaurantItem({
                              id: product.id,
                              price: roundPrice(finalPrice / 10),
                              title: item.displayname,
                              vendorId: id,
                              point: item.point,
                              image: product?.photo_igu,
                            })
                          );
                        }
                      }}
                      onMinusClick={() => {
                        const id = vendorId;
                        if (id && !Array.isArray(id)) {
                          dispatch(removeCartRestaurantCartListLastOrder({id: product.id, vendorId: id}));
                        }
                      }}
                      onClick={() => handleProductData(item)}
                    />
                  </div>

                  // <Link key={index} href={`/${vendorName}/product/${item.id}`} prefetch={false}>

                  // </Link>
                );
              })}
            </div>
          </Fragment>
        );
      })}
      <VendorProductBottomSheet open={bottomSheet} onClose={() => setBottomSheet(false)} data={product} />
    </>
  );
}

export default VendorCategoryProductsList;
