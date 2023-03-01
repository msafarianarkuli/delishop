import RestaurantCommentRate from "view/restaurantComment/component/RestaurantCommentRate";
import {RestaurantInfoAppHeader} from "components";
import RestaurantCommentList from "view/restaurantComment/component/RestaurantCommentList";

function RestaurantComment() {
  return (
    <>
      <RestaurantInfoAppHeader active="comment" />
      <div className="mt-headerNormal px-screenSpace">
        <RestaurantCommentRate />
        <div className="my-5 text-[18px] font-medium">نظرات کاربران</div>
        <RestaurantCommentList />
      </div>
    </>
  );
}

export default RestaurantComment;
