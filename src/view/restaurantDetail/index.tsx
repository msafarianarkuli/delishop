import React, {useState} from "react";
import RestaurantDetailImageHeader from "view/restaurantDetail/component/RestaurantDetailImageHeader";
import RestaurantDetailTab from "view/restaurantDetail/component/RestaurantDetailTab";
import RestaurantDetailHeader from "view/restaurantDetail/component/RestaurantDetailHeader";
import RestaurantDetailSubmitBtn from "view/restaurantDetail/component/RestaurantDetailSubmitBtn";
import RestaurantDetailModal from "view/restaurantDetail/component/restaurantDetailModal/RestaurantDetailModal";
import styles from "view/restaurantDetail/restaurantDetail.module.scss";
import RestaurantDetailSummary from "view/restaurantDetail/component/RestaurantDetailSummary";
import RestaurantDetailList from "view/restaurantDetail/component/RestaurantDetailList";

function RestaurantDetail() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <RestaurantDetailHeader />
      <RestaurantDetailImageHeader />
      <RestaurantDetailSummary />
      <RestaurantDetailTab />
      <RestaurantDetailList onClick={() => setModal(true)} />
      <RestaurantDetailSubmitBtn />
      <RestaurantDetailModal open={modal} onCancel={() => setModal(false)} />
      <div className={styles.restaurant_detail_gradient} />
    </>
  );
}

export default RestaurantDetail;
