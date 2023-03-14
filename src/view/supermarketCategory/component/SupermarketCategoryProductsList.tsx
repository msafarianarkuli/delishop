import {Fragment, useMemo} from "react";
import SupermarketCategoryItemHeader from "view/supermarketCategory/component/SupermarketCategoryItemHeader";
import SupermarketCategoryCard from "view/supermarketCategory/component/supermarketCategoryCard";
import Link from "next/link";
import {useSupermarketCategoryData} from "view/supermarketCategory/context/SupermarketCategoryDataProvider";
import {useRouter} from "next/router";
import {
  removeCartSupermarketLastOrder,
  selectCartSupermarketCart,
  setCartSupermarketItem,
  setCartSupermarketVendorData,
} from "redux/cartSupermraket/cartSupermarketReducer";
import {useDispatch, useSelector} from "react-redux";
import {useSupermarketCategorySubcategoryFilter} from "view/supermarketCategory/context/SupermarketCategorySubcategoryFilterProvider";

function SupermarketCategoryProductsList() {
  const {data} = useSupermarketCategoryData();
  const router = useRouter();
  const cart = useSelector(selectCartSupermarketCart);
  const dispatch = useDispatch();
  const filterId = useSupermarketCategorySubcategoryFilter();

  const vendorId = useMemo(() => {
    let id = router.query.id;
    if (id && !Array.isArray(id)) {
      return id;
    }
    return "";
  }, [router.query.id]);

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
            <SupermarketCategoryItemHeader title={value.displayname} />
            <div className="flex overflow-auto py-5 pr-screenSpace">
              {value.products?.map((item, index) => {
                const product = item.productKind[0];
                const addedPercent = item.priceClass / 100;
                const finalPrice = product.price + product.price * addedPercent;
                const count = cart.cartOrders[product.id]?.length || 0;
                return (
                  <Link key={index} href={`/supermarket/product/${item.id}`} prefetch={false}>
                    <SupermarketCategoryCard
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
                                title: "",
                                vendorId,
                              })
                            );
                          }
                          dispatch(
                            setCartSupermarketItem({
                              title: item.displayname,
                              price: finalPrice,
                              id: product.id,
                              image: product.photo_igu,
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
