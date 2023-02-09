import {AppHeader, AppHeaderBackBtn} from "components";
import {useRouter} from "next/router";
import {useEffect, useRef} from "react";

function RestaurantOrderDetailHeader() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const div = ref.current as HTMLDivElement;
    if (router.query?.map && !div.classList.contains("hidden")) {
      div.classList.add("hidden");
    } else if (!router.query?.map && div.classList.contains("hidden")) {
      div.classList.remove("hidden");
    }
  }, [router.query?.map]);

  function onClick() {
    if (!router.query?.map) {
      router.back();
    } else {
      const div = ref.current as HTMLDivElement;
      const floatPage = document.getElementById("restaurantOrderFloatPage") as HTMLDivElement;
      const contentPartOne = document.getElementById("restaurantOrderDetailContentPartOne") as HTMLDivElement;
      const boxDiv = document.getElementById("restaurantOrderFloatPageBox") as HTMLDivElement;
      const btn = document.getElementById("restaurantOrderFloatPageBtn") as HTMLDivElement;
      const contentContainer = document.getElementById("restaurantOrderDetailContentContainer") as HTMLDivElement;
      div.classList.add("hidden");
      const initialHeight = 36 + 20;
      floatPage.style.height = initialHeight + contentPartOne.scrollHeight + "px";
      boxDiv.style.removeProperty("border-radius");
      boxDiv.classList.remove("overflow-auto");
      boxDiv.classList.add("overflow-hidden");
      boxDiv.scrollTo({top: 0});
      btn.classList.remove("hidden");
      btn.classList.add("flex");
      contentContainer.classList.remove("mt-headerNormal");
      contentContainer.classList.add("mt-[36px]");
    }
  }

  return (
    <div ref={ref} id="restaurantOrderDetailHeader" className="fixed z-10 top-0 right-0 left-0 header_background">
      <AppHeader body="جزئیات سفارش" right={<AppHeaderBackBtn onClick={onClick} />} />
    </div>
  );
}

export default RestaurantOrderDetailHeader;
