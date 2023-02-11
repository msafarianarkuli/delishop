import styles from "view/restaurantOrderDetail/restaurantOrderDetail.module.scss";
import {IconRoundedTop} from "assets/icons";
import {useRef} from "react";
import RestaurantOrderDetailContent from "view/restaurantOrderDetail/component/RestaurantOrderDetailContent";

interface IRestaurantOrderFloatPage {
  height: number;
}

function RestaurantOrderFloatPage(props: IRestaurantOrderFloatPage) {
  const {height} = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  function onClick() {
    const containerDiv = containerRef.current as HTMLDivElement;
    const boxDiv = boxRef.current as HTMLDivElement;
    const btn = btnRef.current as HTMLButtonElement;
    const header = document.getElementById("restaurantOrderDetailHeader") as HTMLDivElement;
    const contentContainer = document.getElementById("restaurantOrderDetailContentContainer") as HTMLDivElement;
    containerDiv.style.height = window.innerHeight + "px";
    boxDiv.style.borderRadius = "0";
    boxDiv.classList.remove("overflow-hidden");
    boxDiv.classList.add("overflow-auto");
    btn.classList.remove("flex");
    btn.classList.add("hidden");
    header.classList.remove("hidden");
    contentContainer.classList.remove("mt-[36px]");
    contentContainer.classList.add("mt-headerNormal");
  }

  return (
    <div
      id="restaurantOrderFloatPage"
      ref={containerRef}
      className="absolute z-[1000] right-0 left-0 bottom-0 transition-height ease-linear duration-300"
      style={{height}}
    >
      <div
        id="restaurantOrderFloatPageBox"
        ref={boxRef}
        className={`${styles.restaurant_order_detail_float_page} overflow-hidden`}
      >
        <button
          id="restaurantOrderFloatPageBtn"
          ref={btnRef}
          onClick={onClick}
          className="absolute top-0 lef-0 right-0 flex w-full items-center justify-center header_background h-[36px]"
        >
          <IconRoundedTop className="w-5 h-5 text-primary" />
        </button>
        <div className="py-[10px]">
          <RestaurantOrderDetailContent />
        </div>
      </div>
    </div>
  );
}

export default RestaurantOrderFloatPage;
