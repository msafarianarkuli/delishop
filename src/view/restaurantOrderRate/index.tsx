import RestaurantOrderRateHeader from "view/restaurantOrderRate/component/RestaurantOrderRateHeader";
import RestaurantOrderRateCard from "view/restaurantOrderRate/component/restaurantOrderRateCard/RestaurantOrderRateCard";
import RestaurantOrderRateDescription from "view/restaurantOrderRate/component/RestaurantOrderRateDescription";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import {createLog, number2Digits} from "utils/utils";
import {FormProvider, useForm} from "react-hook-form";
import RestaurantOrderRateSubmit from "view/restaurantOrderRate/component/RestaurantOrderRateSubmit";

dayjs.extend(jalaliday);

interface IOrderRateForm {
  delivery: number;
  quality: number;
  description: number;
}

function RestaurantOrderRate() {
  const date = new Date().toISOString();
  const methods = useForm<IOrderRateForm>();
  const {handleSubmit} = methods;

  async function onSubmit(payload: IOrderRateForm) {
    createLog("payload", payload);
  }

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
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <RestaurantOrderRateCard id="delivery" title="تحویل سفارشتان چطور بود؟" />
              <RestaurantOrderRateCard id="quality" title="کیفیت سفارش شما چطور بود؟" />
              <RestaurantOrderRateDescription />
              <RestaurantOrderRateSubmit />
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}

export default RestaurantOrderRate;
