import OrderCompleteCard from "view/orderComplete/component/orderCompleteCard/OrderCompleteCard";
import useCartRestaurant from "hooks/useCartRestaurant";
import {useMemo} from "react";
import {mergeCartListToArray} from "utils/utils";
import {useSelector} from "react-redux";
import {selectCartRestaurant} from "redux/cartRestaurant/cartRestaurantReducer";

function OrderCompleteList() {
  const vendor = useCartRestaurant();
  const cart = useSelector(selectCartRestaurant);

  const data = useMemo(() => {
    if (cart.isLoadedFromStorage) {
      return mergeCartListToArray(vendor?.cartOrders || {});
    }
    return [];
  }, [cart.isLoadedFromStorage, vendor?.cartOrders]);

  return (
    <div className="mt-headerNormal px-screenSpace">
      {data.map((item, index) => {
        return (
          <OrderCompleteCard
            key={index}
            title={item.title}
            price={item.price}
            count={item.count}
            extra={item.extra}
            onAddItem={() => {}}
          />
        );
      })}
    </div>
  );
}

export default OrderCompleteList;
