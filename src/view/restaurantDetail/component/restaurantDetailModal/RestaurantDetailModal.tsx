import {CustomModal} from "components";
import RestaurantDetailModalBody from "view/restaurantDetail/component/restaurantDetailModal/RestaurantDetailModalBody";

interface IRestaurantDetailModalMore {
  open: boolean;
}

function RestaurantDetailModal(props: IRestaurantDetailModalMore) {
  const {open} = props;
  return (
    <>
      <CustomModal
        open={open}
        header={<div className="w-full text-[15px] text-center font-medium">افزودن موارد دیگر</div>}
        body={<RestaurantDetailModalBody />}
        classNameBody="px-0"
      />
    </>
  );
}

export default RestaurantDetailModal;
