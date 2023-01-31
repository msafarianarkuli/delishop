import {useEffect, useState} from "react";
import RestaurantCompleteHeader from "view/restaurantComplete/component/RestaurantCompleteHeader";
import RestaurantCompleteSubmitBtn from "view/restaurantComplete/component/RestaurantCompleteSubmitBtn";
import RestaurantCompletePartOne from "view/restaurantComplete/component/RestaurantCompletePartOne";
import RestaurantCompletePartTwo from "view/restaurantComplete/component/RestaurantCompletePartTwo";
import {useRouter} from "next/router";

function RestaurantComplete() {
  const router = useRouter();
  const [state, setState] = useState<number>(1);

  useEffect(() => {
    window.scrollTo({top: 0});
  }, [state]);

  return (
    <>
      <RestaurantCompleteHeader
        onClick={() => {
          if (state === 1) {
            router.back();
          } else {
            setState(1);
          }
        }}
      />
      <div className="mb-[100px]">{state === 1 ? <RestaurantCompletePartOne /> : <RestaurantCompletePartTwo />}</div>
      <RestaurantCompleteSubmitBtn
        step={state}
        onClick={() => {
          setState(2);
        }}
      />
    </>
  );
}

export default RestaurantComplete;
