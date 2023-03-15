import CommentInfoPageHeader from "components/commentInfoPage/commentInfoPageHeader";
import CommentPageRate from "components/commentInfoPage/commentPage/CommentPageRate";
import CommentPageList from "components/commentInfoPage/commentPage/CommentPageList";
import {TGetVendorCommentsComments} from "types/interfaceVendorComments";

interface ICommentPage {
  baseUrl: string;
  data: TGetVendorCommentsComments;
}

function CommentPage(props: ICommentPage) {
  const {baseUrl, data} = props;
  return (
    <>
      <CommentInfoPageHeader baseUrl={baseUrl} active="comment" />
      <div className="mt-headerNormal px-screenSpace">
        <CommentPageRate />
        <div className="my-5 text-[18px] font-medium">نظرات کاربران</div>
        <CommentPageList data={data} />
      </div>
    </>
  );
}

export default CommentPage;
