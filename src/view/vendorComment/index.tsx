import CommentPage from "components/commentInfoPage/commentPage";
import {useVendorCommentParams} from "view/vendorComment/context/VendorCommentParamsProvider";
import {useVendorCommentData} from "view/vendorComment/context/VendorCommentDataProvider";

function VendorComment() {
  const {data} = useVendorCommentData();
  const {vendor} = useVendorCommentParams();

  return <CommentPage type="restaurant" baseUrl={`/${vendor}`} data={data?.comments || []} />;
}

export default VendorComment;
