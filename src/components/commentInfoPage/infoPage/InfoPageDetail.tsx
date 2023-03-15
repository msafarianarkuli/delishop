import {useMemo} from "react";
import {TGetVendorsDetailVendorTags} from "types/interfaceVendorDetail";

export interface IInfoPageDetail {
  tags: TGetVendorsDetailVendorTags;
  maxSendTime: string;
  name: string;
  minCart: number;
  logo?: string;
}

function InfoPageDetail(props: IInfoPageDetail) {
  const {tags, maxSendTime, name, minCart, logo} = props;

  const productType = useMemo(() => {
    let result = "";
    tags.forEach((item, index) => {
      if (index > 0) result += ",";
      result += item.displayname;
    });
    return result;
  }, [tags]);

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
        <div className="flex items-center font-light text-[13px] mt-2">
          <div>
            <div>نوع محصولات:</div>
            <div>حداقل سبد خرید:</div>
            <div>مدت زمان ارسال:</div>
            <div>روش پرداخت:</div>
          </div>
          <div className="mr-5">
            <div>{productType}</div>
            <div>{(minCart || 0).toLocaleString("en-US")} تومان</div>
            <div>
              <span>{timeDelivery}</span>
              <span className="mr-1">دقیقه</span>
            </div>
            <div>آنلاین</div>
          </div>
        </div>
      </div>
      <img src={logo} alt={name} className="w-[50px] h-[50px] object-center object-cover mt-2" />
    </div>
  );
}

export default InfoPageDetail;
