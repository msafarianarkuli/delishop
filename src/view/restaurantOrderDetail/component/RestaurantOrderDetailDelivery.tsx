import accept from "assets/images/pin-order-accept.svg";
import delivery from "assets/images/pin-order-delivery.svg";
import {Button} from "antd";
import {IconSupport} from "assets/icons";
import {useEffect, useState} from "react";

interface IRestaurantOrderDetailDelivery {
  deliveryTime: string;
}

function RestaurantOrderDetailDelivery({deliveryTime}: IRestaurantOrderDetailDelivery) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      setStep((prevState) => {
        if (prevState === 1) return 2;
        return 1;
      });
    }, 2000);

    return () => clearTimeout(timeout);
  }, [step]);

  return (
    <div className="px-screenSpace mt-3">
      <div className="flex items-center justify-between">
        <div className="text-[15px] font-medium text-primary pl-1">سفارش شما در حال آماده سازی می باشد.</div>
        <div className="font-semibold whitespace-nowrap">
          <div className="text-[11px] mb-2">تحویل تا ساعت:</div>
          <div className="inner_box text-[13px] text-center">{deliveryTime}</div>
        </div>
      </div>
      <div className="mt-12 mb-9 mx-7">
        <div className="relative w-full h-[2px] bg-[#D9D9D9] rounded-full">
          <div
            className="absolute right-0 top-0 h-full bg-primary rounded-full transition-width duration-300 ease-linear"
            style={{width: step === 1 ? "50%" : "100%"}}
          />
          <img
            src={accept.src}
            alt="accept"
            className="absolute w-[19px] h-[28px] bottom-[2px] right-[calc(50%-9px)] transition-opacity duration-200 ease-linear"
            style={{opacity: step === 1 ? 1 : 0}}
          />
          <img
            src={delivery.src}
            alt="delivery"
            className="absolute w-[19px] h-[28px] bottom-[2px] -left-[9px] transition-opacity duration-200 ease-linear"
            style={{opacity: step === 1 ? 0 : 1}}
          />
        </div>
      </div>
      <Button
        icon={<IconSupport className="w-5 h-5 ml-1" />}
        className="flex items-center border-0 shadow-none bg-[rgba(44,48,54,0.04)] rounded-[5px] mr-auto"
      >
        تماس با پشتیبانی
      </Button>
    </div>
  );
}

export default RestaurantOrderDetailDelivery;
