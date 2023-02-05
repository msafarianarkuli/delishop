import {useEffect, useRef} from "react";
import RestaurantDetailTitle from "view/restaurantDetail/component/RestaurantDetailTitle";
import RestaurantDetailDescription from "view/restaurantDetail/component/RestaurantDetailDescription";
import RestaurantDetailTime from "view/restaurantDetail/component/RestaurantDetailTime";
import RestaurantDetailDelivery from "view/restaurantDetail/component/RestaurantDetailDelivery";
import RestaurantDetailMoreInfo from "view/restaurantDetail/component/RestaurantDetailMoreInfo";

function RestaurantDetailSummary() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current! as HTMLDivElement;
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

    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <>
      <div ref={ref} className="pt-6 pb-5 border-b border-borderColor px-screenSpace">
        <RestaurantDetailTitle />
        <RestaurantDetailDescription />
      </div>
      <div className="flex items-center justify-center py-5 border-b border-borderColor px-screenSpace">
        <RestaurantDetailTime />
        <RestaurantDetailDelivery />
        <RestaurantDetailMoreInfo />
      </div>
    </>
  );
}

export default RestaurantDetailSummary;
