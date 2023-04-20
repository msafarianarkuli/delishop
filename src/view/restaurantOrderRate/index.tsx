import RestaurantOrderRateHeader from "view/restaurantOrderRate/component/RestaurantOrderRateHeader";
import RestaurantOrderRateCard from "view/restaurantOrderRate/component/restaurantOrderRateCard/RestaurantOrderRateCard";
import RestaurantOrderRateDescription from "view/restaurantOrderRate/component/RestaurantOrderRateDescription";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import {number2Digits} from "utils/utils";
import {FormProvider, useForm} from "react-hook-form";
import RestaurantOrderRateSubmit from "view/restaurantOrderRate/component/RestaurantOrderRateSubmit";
import {useRestaurantOrderRateData} from "view/restaurantOrderRate/context/RestaurantOrderRateDataProvider";
import {axiosService} from "utils/axiosService";
import {API} from "api/const";
import {useSession} from "next-auth/react";
import {useRouter} from "next/router";

dayjs.extend(jalaliday);

interface IOrderRateForm {
  delivery: number;
  quality: number;
  description: string;
}

interface IBody {
  overallrate_num: number;
  deliveryrate_num: number;
  comment?: string;
}

function RestaurantOrderRate() {
  const {data: vendorData} = useRestaurantOrderRateData();
  const {data} = useSession();
  const router = useRouter();
  const methods = useForm<IOrderRateForm>();
  const {handleSubmit} = methods;
  const date = new Date().toISOString();

  async function onSubmit(payload: IOrderRateForm) {
    console.log("payload", payload);
    const url = API.ADD_POLL.replace("{id}", router.query.id as string);
    try {
      const body: IBody = {
        deliveryrate_num: payload.delivery,
        overallrate_num: payload.quality,
      };
      if (payload.description) {
        body.comment = payload.description;
      }
      const res = await axiosService({url, method: "post", token: data?.user.token, body});
      await router.replace("/");
      console.log("RestaurantOrderRate res", res);
    } catch (e) {
      console.log("RestaurantOrderRate error", e);
    }
  }

  return (
    <>
      <RestaurantOrderRateHeader />
      <div className="mt-headerNormal px-screenSpace">
        <div className="text-[15px] font-bold">
          <span>{vendorData?.vendor.name}</span>
          {/*<span className="text-textColorLight mr-1">(وردآورد)</span>*/}
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
              <RestaurantOrderRateCard
                id="delivery"
                title="تحویل سفارشتان چطور بود؟"
                rules={{
                  required: "به تحویل سفارش نمره دهید",
                }}
              />
              <RestaurantOrderRateCard
                id="quality"
                title="کیفیت سفارش شما چطور بود؟"
                rules={{
                  required: "به کیفیت سفارش نمره دهید",
                }}
              />
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
