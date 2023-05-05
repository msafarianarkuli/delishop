import React from "react";
import {BottomNavigation, OrderAppHeader} from "components/index";
import OrderActiveDataProvider from "components/orderActive/context/OrderActiveDataProvider";
import OrderActiveList from "components/orderActive/component/OrderActiveList";
import {TDataBottomNavigation} from "components/bottomNavigation/BottomNavigation";

interface IOrderActive {
  activeLink: string;
  previousLink: string;
  queryKey: string;
  color: "default" | "supermarket";
  bottomNavigationData: TDataBottomNavigation;
  categoryId: number[];
}

function OrderActive(props: IOrderActive) {
  const {activeLink, previousLink, queryKey, color, bottomNavigationData, categoryId} = props;
  return (
    <OrderActiveDataProvider categoryId={categoryId} queryKey={queryKey}>
      <OrderAppHeader color={color} active="active" activeLink={activeLink} previousLink={previousLink} />
      <div className="mt-headerNormal px-[10px] mb-bottomNavigation">
        <OrderActiveList color={color} />
      </div>
      <BottomNavigation primary={color === "default" ? "restaurant" : "supermarket"} data={bottomNavigationData} />
    </OrderActiveDataProvider>
  );
}

export default OrderActive;
