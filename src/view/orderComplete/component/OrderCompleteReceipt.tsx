import dayjs from "dayjs";
import jalaliday from "jalaliday";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";

dayjs.extend(jalaliday);

function OrderCompleteReceipt() {
  const type = useTypeColor();
  const colorTitle = classNames({
    "text-primary": type === "default",
    "text-primarySupermarket": type === "supermarket",
  });

  return (
    <div className="mt-7 mx-screenSpace bg-[#F2F3F6] py-3 px-2">
      <div className="flex items-center justify-between border-b border-borderColor pb-3">
        <div className={colorTitle}>جزئیات سفارش</div>
        <div className="text-[13px]">{dayjs().calendar("jalali").format("YYYY/MM/DD")}</div>
      </div>
      <div className="border-b border-borderColor py-2">
        <div className="flex items-center justify-between mb-3">
          <div>جمع سفارش(2)</div>
          <div>
            <span>{(162500).toLocaleString("en-US")}</span>
            <span className="mr-1">تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div>هزینه ارسال</div>
          <div>
            <span>{(15500).toLocaleString("en-US")}</span>
            <span className="mr-1">تومان</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>تعداد سکه دریافتی</div>
          <div>
            <span>15</span>
            <span className="mr-1">سکه</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <div>جمع کل پرداختی</div>
        <div>
          <span>{(174000).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </div>
      </div>
    </div>
  );
}

export default OrderCompleteReceipt;
