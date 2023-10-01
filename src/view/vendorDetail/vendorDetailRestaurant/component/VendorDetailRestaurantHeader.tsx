import {useEffect, useState} from "react";
import {useVendorDetailRestaurantData} from "view/vendorDetail/vendorDetailRestaurant/context/VendorDetailRestaurantDataProvider";
import {useRouter} from "next/router";
import {AppHeader, AppHeaderBackBtn, AppHeaderFavorite} from "components";

function VendorDetailRestaurantHeader() {
  const router = useRouter();
  const [type, setType] = useState<"black" | "white">("white");

  useEffect(() => {
    const div = document.getElementById("restaurantDetailSummaryTitleDesc") as HTMLDivElement;
    const baseHeight = 57;

    function scroll() {
      const diffTop = div.getBoundingClientRect().top;
      if (diffTop > baseHeight && type === "black") {
        setType("white");
      }
      if (diffTop < baseHeight && type === "white") {
        setType("black");
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [type]);

  useEffect(() => {
    const div = document.getElementById("restaurantDetailSummaryTitleDesc") as HTMLDivElement;
    const baseHeight = 57;

    function scroll() {
      const diffTop = div.getBoundingClientRect().top;
      const header = document.getElementById("restaurantDetailHeader")!;
      const title = document.getElementById("restaurantDetailHeaderTitle")!;

      if (diffTop > baseHeight && title.classList.contains("opacity-100")) {
        title.classList.remove("opacity-100");
        title.classList.add("opacity-0");
      }
      if (diffTop < baseHeight && title.classList.contains("opacity-0")) {
        title.classList.remove("opacity-0");
        title.classList.add("opacity-100");
      }
      if (diffTop > baseHeight && header.classList.contains("header_background")) {
        header.classList.remove("header_background");
      }
      if (diffTop < baseHeight && !header.classList.contains("header_background")) {
        header.classList.add("header_background");
      }
    }

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div id="restaurantDetailHeader" className="fixed top-0 right-0 left-0 z-10">
      <AppHeader
        left={<AppHeaderBackBtn type={type} onClick={() => router.back()} />}
        body={<RestaurantDetailHeaderBody />}
        right={<AppHeaderFavorite type={type} />}
      />
    </div>
  );
}

export default VendorDetailRestaurantHeader;

function RestaurantDetailHeaderBody() {
  const {data} = useVendorDetailRestaurantData();
  return (
    <div id="restaurantDetailHeaderTitle" className="opacity-0 transition-opacity ease-linear duration-200">
      <span>{data?.vendor.name}</span>
    </div>
  );
}
