import React, {useRef} from "react";
import {IconRoundedTop} from "assets/icons";
import OrderDetailContent from "view/orderDetail/component/OrderDetailContent";
import styles from "view/orderDetail/OrderDetail.module.scss";
import useTypeColor from "hooks/useTypeColor";
import classNames from "classnames";

interface IOrderDetailFloatPage {
  height: number;
}

function OrderDetailFloatPage(props: IOrderDetailFloatPage) {
  const {height} = props;
  const typeColor = useTypeColor();
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

  const iconClassName = classNames({
    "w-5 h-5 text-primary": true,
    "text-primary": typeColor === "default",
    "text-primarySupermarket": typeColor === "supermarket",
  });

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
        className={`${styles.order_detail_float_page} overflow-hidden`}
      >
        <button
          id="restaurantOrderFloatPageBtn"
          ref={btnRef}
          onClick={onClick}
          className="absolute top-0 lef-0 right-0 flex w-full items-center justify-center header_background h-[36px]"
        >
          <IconRoundedTop className={iconClassName} />
        </button>
        <div className="py-[10px]">
          <OrderDetailContent />
        </div>
      </div>
    </div>
  );
}

export default OrderDetailFloatPage;
