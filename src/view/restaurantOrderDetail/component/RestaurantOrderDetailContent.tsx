import RestaurantOrderDetailHeader from "view/restaurantOrderDetail/component/RestaurantOrderDetailHeader";
import {useRestaurantOrderDetailData} from "view/restaurantOrderDetail/component/RestaurantOrderDetailDataProvider";
import RestaurantOrderDetailContentItems from "view/restaurantOrderDetail/component/RestaurantOrderDetailContentItems";

function RestaurantOrderDetailContent() {
  const {data, isLoading} = useRestaurantOrderDetailData();

  function showContent() {
    if (isLoading) {
      return <div className="px-screenSpace mt-headerNormal">loading...</div>;
    } else if (!data) {
      return <div className="px-screenSpace mt-headerNormal">موردی یافت نشد</div>;
    } else {
      return <RestaurantOrderDetailContentItems />;
    }
  }

  return (
    <>
      <RestaurantOrderDetailHeader />
      {showContent()}
    </>
  );
}

export default RestaurantOrderDetailContent;
