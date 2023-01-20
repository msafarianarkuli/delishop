import {Checkbox} from "components";
import {Button} from "antd";
import {MouseEventHandler, useState} from "react";

interface IRestaurantDetailModalBody {
  onClick: MouseEventHandler;
}

function RestaurantDetailModalBody({onClick}: IRestaurantDetailModalBody) {
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className="text-center pb-4 border-b border-borderColor">مخلفات غذای خود را انتخاب کنید</div>
      <div className="flex items-center justify-between p-[15px] border-b border-borderColor">
        <Checkbox id="1" classNameLabel="mr-2" label="پک کارد و چنگال" value={check} onChange={setCheck} />
        <div>{(3500).toLocaleString("en-US")} تومان</div>
      </div>
      <div className="px-[10px] mt-10">
        <Button onClick={onClick} type="primary" className="submit-btn modal-submit-btn w-full text-[15px]">
          افزودن ({(162500).toLocaleString("en-US")} تومان)
        </Button>
      </div>
    </>
  );
}

export default RestaurantDetailModalBody;
