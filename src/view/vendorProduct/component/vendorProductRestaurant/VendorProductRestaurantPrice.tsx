import {Counter} from "components";

function VendorProductRestaurantPrice() {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between px-screenSpace">
        <div>
          <span className="text-[20px] font-semibold">{(250000).toLocaleString("en-US")}</span>
          <span className="mr-1 text-[15px]">تومان</span>
        </div>
        <Counter count={0} />
      </div>
    </div>
  );
}

export default VendorProductRestaurantPrice;
