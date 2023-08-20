import {useMemo} from "react";
import {TGetVendorsDetailVendorTags} from "types/interfaceVendorDetail";

export interface IInfoPageDetail {
  tags: TGetVendorsDetailVendorTags;
  maxSendTime: string;
  name: string;
  minCart: number;
  logo?: string;
  about?: string | null;
}

function InfoPageDetail(props: IInfoPageDetail) {
  const {maxSendTime, name, minCart, logo, about} = props;

  // const productType = useMemo(() => {
  //   let result = "";
  //   tags.forEach((item, index) => {
  //     if (index > 0) result += ",";
  //     result += item.displayname;
  //   });
  //   return result;
  // }, [tags]);

  const timeDelivery = useMemo(() => {
    let result = "";
    if (maxSendTime) {
      if (maxSendTime.search("-") !== -1) {
        result = maxSendTime.replace("-", " تا ");
      } else {
        result = "تا " + maxSendTime;
      }
    }
    return result;
  }, [maxSendTime]);

  return (
    <div className="flex py-4 px-screenSpace border-b border-borderColor">
      <div className="flex flex-col flex-1">
        <div className="font-medium">{name}</div>
        <div className="flex flex-col items-start font-light text-[13px] mt-2">
          <div>
            <span>نوع محصولات: </span>
            <span>{about}</span>
          </div>
          <div>
            <span>حداقل سبد خرید: </span>
            <span>{(minCart || 0).toLocaleString("en-US")} تومان</span>
          </div>
          <div>
            <span>مدت زمان ارسال: </span>
            <span>{`${timeDelivery} دقیقه`}</span>
          </div>
          <div>
            <span>روش پرداخت: </span>
            <span>آنلاین/ نقدی</span>
          </div>
        </div>
      </div>
      <img src={logo} alt={name} className="w-[50px] h-[50px] object-center object-cover mt-2" />
    </div>
  );
}

export default InfoPageDetail;
