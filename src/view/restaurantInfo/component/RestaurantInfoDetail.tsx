import img from "assets/images/res-logo.png";

function RestaurantInfoDetail() {
  return (
    <div className="flex py-4 px-screenSpace border-b border-borderColor">
      <div className="flex flex-col flex-1">
        <div className="font-medium">آریایی (وردآورد)</div>
        <div className="flex items-center font-light text-[13px] mt-2">
          <div>
            <div>نوع محصولات:</div>
            <div>حداقل سبد خرید:</div>
            <div>مدت زمان ارسال:</div>
            <div>روش پرداخت:</div>
          </div>
          <div className="mr-5">
            <div>ایرانی،سنتی،کباب،چلوخورشت</div>
            <div>{(50000).toLocaleString("en-US")} تومان</div>
            <div>تا 35 دقیقه</div>
            <div>آنلاین</div>
          </div>
        </div>
      </div>
      <img src={img.src} className="w-[50px] h-[50px] object-center object-cover mt-2" />
    </div>
  );
}

export default RestaurantInfoDetail;
