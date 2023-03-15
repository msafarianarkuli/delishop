import CommentPage from "components/commentInfoPage/commentPage";
import {useRestaurantCommentData} from "view/restaurantComment/context/RestaurantCommentDataProvider";

function RestaurantComment() {
  const {data} = useRestaurantCommentData();

  return <CommentPage type="restaurant" baseUrl="/restaurant" data={data?.comments || []} />;
}

export default RestaurantComment;
