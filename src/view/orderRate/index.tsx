import {useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {FormProvider, useForm} from "react-hook-form";
import {useQueryClient} from "react-query";
import {API} from "api/const";
import {axiosService} from "utils/axiosService";
import {useOrderRateData} from "view/orderRate/context/OrderRateDataProvider";
import dayjs from "dayjs";
import {number2Digits} from "utils/utils";
import OrderRateHeader from "view/orderRate/component/OrderRateHeader";
import OrderRateCard from "view/orderRate/component/orderRateCard";
import OrderRateDescription from "view/orderRate/component/OrderRateDescription";
import OrderRateSubmit from "view/orderRate/component/OrderRateSubmit";
import jalaliday from "jalaliday";
import {QUERY_KEY_RESTAURANT_ORDERS_PREVIOUS} from "view/restaurantOrderPrevious";
import {QUERY_KEY_SUPERMARKET_ORDERS_PREVIOUS} from "view/supermarketOrderPrevious";

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

function OrderRate() {
  const {data: orderData} = useOrderRateData();
  const {data} = useSession();
  const router = useRouter();
  const methods = useForm<IOrderRateForm>();
  const {handleSubmit} = methods;
  const date = new Date().toISOString();
  const queryClient = useQueryClient();

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
      await queryClient.invalidateQueries(QUERY_KEY_RESTAURANT_ORDERS_PREVIOUS);
      await queryClient.invalidateQueries(QUERY_KEY_SUPERMARKET_ORDERS_PREVIOUS);
      await router.replace("/");
      console.log("OrderRate res", res);
    } catch (e) {
      console.log("OrderRate error", e);
    }
  }

  return (
    <>
      <OrderRateHeader />
      <div className="mt-headerNormal px-screenSpace">
        <div className="text-[15px] font-bold">
          <span>{orderData?.vendor.name}</span>
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
              <OrderRateCard
                id="delivery"
                title="تحویل سفارشتان چطور بود؟"
                rules={{
                  required: "به تحویل سفارش نمره دهید",
                }}
              />
              <OrderRateCard
                id="quality"
                title="کیفیت سفارش شما چطور بود؟"
                rules={{
                  required: "به کیفیت سفارش نمره دهید",
                }}
              />
              <OrderRateDescription />
              <OrderRateSubmit />
            </form>
          </FormProvider>
        </div>
      </div>
    </>
  );
}

export default OrderRate;
