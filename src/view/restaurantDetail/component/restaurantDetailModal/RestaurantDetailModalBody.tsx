import {Checkbox} from "components";
import {Button} from "antd";
import {MouseEventHandler, useEffect, useState} from "react";
import {IGetVendorDetailMenusGroupsProductsExtras} from "types/interfaceVendorDetail";
import {useRestaurantDetailExtra} from "view/restaurantDetail/context/RestaurantDetailExtraProvider";

interface IRestaurantDetailModalBody {
  onClick: MouseEventHandler;
}

interface IRestaurantDetailModalBodyData extends IGetVendorDetailMenusGroupsProductsExtras {
  isSelected?: boolean;
}

function RestaurantDetailModalBody({onClick}: IRestaurantDetailModalBody) {
  const {data: extraData, isOpen} = useRestaurantDetailExtra();
  const [data, setData] = useState<IRestaurantDetailModalBodyData[]>([]);

  useEffect(() => {
    if (isOpen) {
      if (extraData?.length) {
        console.log("extraData", extraData);
        const tmp: IRestaurantDetailModalBodyData[] = [];
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

  console.log("data", data);

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
                const tmp: IRestaurantDetailModalBodyData[] = [];
                for (const el of data) {
                  if (el.id === item.id) {
                    el.isSelected = value;
                  }
                  tmp.push(el);
                }
                setData(tmp);
              }}
            />
            <div>
              <span>{item.price.toLocaleString("en-US")}</span>
              <span className="mr-1">تومان</span>
            </div>
          </div>
        );
      })}
      <div className="px-[10px] mt-10">
        <Button
          onClick={(e) => {
            onClick(e);
          }}
          type="primary"
          className="submit-btn modal-submit-btn w-full text-[15px]"
        >
          <span className="ml-1">افزودن</span>(<span>{(162500).toLocaleString("en-US")}</span>
          <span>تومان</span>)
        </Button>
      </div>
    </>
  );
}

export default RestaurantDetailModalBody;
