import RestaurantOrderRateHeader from "view/restaurantOrderRate/component/RestaurantOrderRateHeader";
import RestaurantOrderRateCard from "view/restaurantOrderRate/component/restaurantOrderRateCard/RestaurantOrderRateCard";
import RestaurantOrderRateDescription from "view/restaurantOrderRate/component/RestaurantOrderRateDescription";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import {number2Digits} from "utils/utils";

dayjs.extend(jalaliday);

function RestaurantOrderRate() {
  const date = new Date().toISOString();
  return (
    <>
      <RestaurantOrderRateHeader />
      <div className="mt-headerNormal px-screenSpace">
        <div className="text-[15px] font-bold">
          <span>رستوران آریایی</span>
          <span className="text-textColorLight mr-1">(وردآورد)</span>
        </div>
        <div className="flex items-center text-textColorLight text-[13px] mt-2">
          <div>{dayjs(date).calendar("jalali").locale("fa").format("dddd DD MMMM")}</div>
          <div className="mr-2">
            {number2Digits(dayjs(date).hour())}:{number2Digits(dayjs(date).minute())}
          </div>
        </div>
        <div className="mt-7">
          <RestaurantOrderRateCard title="تحویل سفارشتان چطور بود؟" />
          <RestaurantOrderRateCard title="کیفیت سفارش شما چطور بود؟" />
          <RestaurantOrderRateDescription />
        </div>
      </div>
    </>
  );
}

export default RestaurantOrderRate;
