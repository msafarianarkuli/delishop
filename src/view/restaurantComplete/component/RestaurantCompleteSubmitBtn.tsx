import {SubmitBuyBtn} from "components";
import {IconRoundedRight} from "assets/icons";

function RestaurantCompleteSubmitBtn() {
  return (
    <SubmitBuyBtn
      onClick={() => {}}
      right={<IconRoundedRight className="w-5 h-5" />}
      body="ادامه(2)"
      left={
        <>
          {" "}
          <span>{(162500).toLocaleString("en-US")}</span>
          <span className="mr-1">تومان</span>
        </>
      }
    />
  );
}

export default RestaurantCompleteSubmitBtn;
