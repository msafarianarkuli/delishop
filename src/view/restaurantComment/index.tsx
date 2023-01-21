import RestaurantCommentHeader from "view/restaurantComment/component/RestaurantCommentHeader";
import RestaurantCommentRate from "view/restaurantComment/component/RestaurantCommentRate";

function RestaurantComment() {
  return (
    <>
      <RestaurantCommentHeader />
      <div className="mt-headerNormal px-screenSpace">
        <RestaurantCommentRate />
        <div className="my-5 text-[18px] font-medium">نظرات کاربران</div>
      </div>
    </>
  );
}

export default RestaurantComment;
