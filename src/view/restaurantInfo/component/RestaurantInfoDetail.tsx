import {useRestaurantInfoData} from "view/restaurantInfo/context/RestaurantInfoDataProvider";
import {useMemo} from "react";

function RestaurantInfoDetail() {
  const {data} = useRestaurantInfoData();
  const productType = useMemo(() => {
    let result = "";
    const tags = data?.vendor?.tags || [];
    tags.forEach((item, index) => {
      if (index > 0) result += ",";
      result += item.displayname;
    });
    return result;
  }, [data?.vendor?.tags]);
  const timeDelivery = useMemo(() => {
    const time = data?.vendor?.max_sendtime || "";
    let result = "";
    if (time) {
      if (time.search("-") !== -1) {
        result = time.replace("-", " تا ");
      } else {
        result = "تا " + time;
      }
    }
    return result;
  }, [data?.vendor?.max_sendtime]);

  return (
    <div className="flex py-4 px-screenSpace border-b border-borderColor">
      <div className="flex flex-col flex-1">
        <div className="font-medium">{data?.vendor?.name}</div>
        <div className="flex items-center font-light text-[13px] mt-2">
          <div>
            <div>نوع محصولات:</div>
            <div>حداقل سبد خرید:</div>
            <div>مدت زمان ارسال:</div>
            <div>روش پرداخت:</div>
          </div>
          <div className="mr-5">
            <div>{productType}</div>
            <div>{(data?.vendor?.min_cart || 0).toLocaleString("en-US")} تومان</div>
            <div>
              <span>{timeDelivery}</span>
              <span className="mr-1">دقیقه</span>
            </div>
            <div>آنلاین</div>
          </div>
        </div>
      </div>
      <img
        src={data?.vendor?.logo}
        alt={data?.vendor?.name || ""}
        className="w-[50px] h-[50px] object-center object-cover mt-2"
      />
    </div>
  );
}

export default RestaurantInfoDetail;
