import {MouseEventHandler, useEffect, useState} from "react";
import {IGetVendorDetailMenusGroupsProductsExtras} from "types/interfaceVendorDetail";
import {useDispatch} from "react-redux";
import useCartRestaurant from "hooks/useCartRestaurant";
import {Checkbox} from "components";
import {Button} from "antd";
import {TCartReducerCartItemExtraItemExtra} from "types/interfaceCartReducer";
import {setCartRestaurantItem} from "redux/cartRestaurant/cartRestaurantReducer";
import {useVendorDetailRestaurantExtra} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantExtraProvider";

interface IVendorDetailRestaurantModalBody {
  onClick: MouseEventHandler;
}

interface IVendorDetailRestaurantModalBodyData extends IGetVendorDetailMenusGroupsProductsExtras {
  isSelected?: boolean;
}

function VendorDetailRestaurantModalBody({onClick}: IVendorDetailRestaurantModalBody) {
  const {data: extraData, isOpen, id, price, title, point, image} = useVendorDetailRestaurantExtra();
  const [data, setData] = useState<IVendorDetailRestaurantModalBodyData[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  // const totalCartPrice = useSelector(selectCartRestaurantTotalPrice);
  const vendor = useCartRestaurant();

  useEffect(() => {
    if (isOpen && vendor?.totalPrice != null) {
      setTotalPrice(vendor.totalPrice + price);
    }
  }, [isOpen, price, vendor?.totalPrice]);

  useEffect(() => {
    if (isOpen) {
      if (extraData?.length) {
        const tmp: IVendorDetailRestaurantModalBodyData[] = [];
        for (const item of extraData) {
          tmp.push({
            ...item,
            isSelected: false,
          });
        }
        setData(tmp);
      } else {
        setData([]);
      }
    }
  }, [extraData, isOpen]);

  return (
    <>
      <div className="text-center pb-4 border-b border-borderColor">مخلفات غذای خود را انتخاب کنید</div>
      {data?.map((item) => {
        return (
          <div key={item.id} className="flex items-center justify-between p-[15px] border-b border-borderColor">
            <Checkbox
              id="1"
              classNameLabel="mr-2"
              label={item.name}
              value={!!item.isSelected}
              onChange={(value) => {
                const tmp: IVendorDetailRestaurantModalBodyData[] = [];
                for (const el of data) {
                  if (el.id === item.id) {
                    el.isSelected = value;
                  }
                  tmp.push(el);
                }
                let tmpPrice = totalPrice;
                if (value) {
                  tmpPrice += item.price;
                } else {
                  tmpPrice -= item.price;
                }
                setTotalPrice(tmpPrice);
                setData(tmp);
              }}
            />
            <div>
              <span>{Math.round(item.price / 10).toLocaleString("en-US")}</span>
              <span className="mr-1">تومان</span>
            </div>
          </div>
        );
      })}
      <div className="px-[10px] mt-10">
        <Button
          onClick={(e) => {
            if (vendor?.vendorId) {
              const extra: TCartReducerCartItemExtraItemExtra = [];
              for (const item of data) {
                if (item.isSelected) {
                  extra.push({
                    id: item.id,
                    price: item.price,
                    name: item.name,
                  });
                }
              }
              dispatch(
                setCartRestaurantItem({
                  id,
                  extra,
                  price,
                  title,
                  point,
                  vendorId: vendor.vendorId,
                  image,
                })
              );
            }
            onClick(e);
          }}
          type="primary"
          className="submit-btn modal-submit-btn w-full text-[15px]"
        >
          <span className="ml-1">افزودن</span>(<span>{Math.round(totalPrice / 10).toLocaleString("en-US")}</span>
          <span>تومان</span>)
        </Button>
      </div>
    </>
  );
}

export default VendorDetailRestaurantModalBody;
