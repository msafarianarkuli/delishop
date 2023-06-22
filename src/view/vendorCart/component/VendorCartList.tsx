import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import VendorCartCard, {IVendorCartCard} from "view/vendorCart/component/vendorCartCard";
import {useDispatch, useSelector} from "react-redux";
import {removeCartRestaurantCartListCartOrder, selectCartRestaurant} from "redux/cartRestaurant/cartRestaurantReducer";
import {mergeCartListToArray} from "utils/cartReducerUtils";
import {useVendorCartParams} from "view/vendorCart/context/VendorCartParamsProvider";

interface IVendorCartList extends Omit<IVendorCartCard, "onClickRemove" | "onClickOk"> {
  id: string;
}

function VendorCartList() {
  const router = useRouter();
  const {cartList, isLoadedFromStorage} = useSelector(selectCartRestaurant);
  const [data, setData] = useState<IVendorCartList[]>([]);
  const dispatch = useDispatch();
  const {vendor} = useVendorCartParams();

  useEffect(() => {
    if (isLoadedFromStorage) {
      const data: IVendorCartList[] = [];
      if (cartList.length) {
        cartList.forEach((cart) => {
          const cartOrderData = mergeCartListToArray(cart.cartOrders);
          const tmp: IVendorCartList = {
            id: cart?.vendorId || "",
            title: cart.title || "",
            data: cartOrderData,
          };
          data.push(tmp);
        });
      }
      setData(data);
    }
  }, [isLoadedFromStorage, cartList]);

  if (!data.length) return <div>سبد خرید خالی می باشد</div>;
  return (
    <div>
      {data?.map((item, index) => {
        return (
          <VendorCartCard
            key={index}
            title={item.title}
            data={item.data}
            onClickOk={() => router.push(`/${vendor}/${item.id}`)}
            onClickRemove={() => {
              dispatch(removeCartRestaurantCartListCartOrder(item.id));
            }}
          />
        );
      })}
    </div>
  );
}

export default VendorCartList;
