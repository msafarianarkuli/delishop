import {useEffect, useState} from "react";
import {TCartData} from "types/interfaces";
import useCartRestaurant from "hooks/useCartRestaurant";
import {useDispatch} from "react-redux";
import VendorCartDetailCard from "view/vendorCartDetail/component/vendorCartDetailCard";
import {removeCartRestaurantCartListLastOrder, setCartRestaurantItem} from "redux/cartRestaurant/cartRestaurantReducer";
import {useVendorCartDetailParams} from "view/vendorCartDetail/context/VendorCartDetailParamsProvider";
import {mergeCartListToArray} from "utils/cartReducerUtils";

function VendorCartDetailList() {
  const vendorCart = useCartRestaurant();
  const dispatch = useDispatch();
  const [data, setData] = useState<TCartData>([]);
  const {id} = useVendorCartDetailParams();

  useEffect(() => {
    if (vendorCart) {
      let data: TCartData = [];
      if (vendorCart.cartOrders && Object.keys(vendorCart.cartOrders).length) {
        data = mergeCartListToArray(vendorCart.cartOrders);
      }
      setData(data);
    }
  }, [vendorCart]);

  if (!data.length) return <div>سبد خرید خالی می باشد</div>;
  return (
    <div>
      {data.map((item, index) => {
        const finalPrice = item.price ? Math.round(item.price / 10) : 0;
        return (
          <VendorCartDetailCard
            key={index}
            title={item.title}
            image={item.image}
            count={item.count}
            price={finalPrice}
            onAddClick={() => {
              if (id) {
                dispatch(
                  setCartRestaurantItem({
                    vendorId: id,
                    title: item.title,
                    price: item.price,
                    id: +item.id,
                    image: item.image,
                    point: item.point,
                  })
                );
              }
            }}
            onMinusClick={() => {
              dispatch(removeCartRestaurantCartListLastOrder({id: +item.id, vendorId: id}));
            }}
          />
        );
      })}
    </div>
  );
}

export default VendorCartDetailList;
