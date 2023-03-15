import CommentInfoPageHeader from "components/commentInfoPage/commentInfoPageHeader";
import CommentPageRate from "components/commentInfoPage/commentPage/CommentPageRate";
import CommentPageList, {ICommentPageListBase} from "components/commentInfoPage/commentPage/CommentPageList";
import {ICommentInfoPageType} from "components/commentInfoPage/intefaceCommentInfoPage";
import {useMemo} from "react";

interface ICommentPage extends ICommentPageListBase, ICommentInfoPageType {
  baseUrl: string;
}

function CommentPage(props: ICommentPage) {
  const {baseUrl, data, type} = props;

  const primaryColor = useMemo(() => {
    let color = "";
    if (type === "restaurant") color = "text-primary";
    if (type === "supermarket") color = "text-primarySupermarket";
    return color;
  }, [type]);

  return (
    <>
      <CommentInfoPageHeader baseUrl={baseUrl} active="comment" />
      <div className="mt-headerNormal px-screenSpace">
        <CommentPageRate />
        <div className="my-5 text-[18px] font-medium">نظرات کاربران</div>
        <CommentPageList color={primaryColor} data={data} />
      </div>
    </>
  );
}

export default CommentPage;
