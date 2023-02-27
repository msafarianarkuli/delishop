import React, {useState} from "react";
import RestaurantDetailImageHeader from "view/restaurantDetail/component/RestaurantDetailImageHeader";
import RestaurantDetailTab from "view/restaurantDetail/component/RestaurantDetailTab";
import RestaurantDetailHeader from "view/restaurantDetail/component/RestaurantDetailHeader";
import RestaurantDetailSubmitBtn from "view/restaurantDetail/component/RestaurantDetailSubmitBtn";
import RestaurantDetailModal from "view/restaurantDetail/component/restaurantDetailModal/RestaurantDetailModal";
import RestaurantDetailSummary from "view/restaurantDetail/component/RestaurantDetailSummary";
import RestaurantDetailList from "view/restaurantDetail/component/RestaurantDetailList";
import {BottomPageGradient} from "components";
import {useRestaurantDetailData} from "view/restaurantDetail/context/RestaurantDetailDataProvider";

function RestaurantDetail() {
  const [modal, setModal] = useState(false);
  const {error} = useRestaurantDetailData();

  if (error?.status === 404) {
    return <div>موردی یافت نشد</div>;
  }
  return (
    <>
      <RestaurantDetailHeader />
      <RestaurantDetailImageHeader />
      <RestaurantDetailSummary />
      <RestaurantDetailTab />
      <RestaurantDetailList onClick={() => setModal(true)} />
      <RestaurantDetailSubmitBtn />
      <RestaurantDetailModal open={modal} onCancel={() => setModal(false)} />
      <BottomPageGradient />
    </>
  );
}

export default RestaurantDetail;
