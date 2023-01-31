import {IconDownload} from "assets/icons";
import {useRouter} from "next/router";
import {SubmitBuyBtn} from "components";

function RestaurantDetailSubmitBtn() {
  const router = useRouter();
  return (
    <SubmitBuyBtn
      onClick={() => router.push("/restaurant/complete")}
      right={<IconDownload className="w-5 h-5" />}
      body="تکمیل خرید(2)"
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

export default RestaurantDetailSubmitBtn;
