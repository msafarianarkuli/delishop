import {useSupermarketCommentData} from "view/supermarketComment/context/SupermarketCommentDataProvider";
import CommentPage from "components/commentInfoPage/commentPage";

function SupermarketComment() {
  const {data} = useSupermarketCommentData();
  return <CommentPage baseUrl="/supermarket" data={data?.comments || []} />;
}

export default SupermarketComment;
