import React from "react";
import {TGetVendorCommentsComments} from "types/interfaceVendorComments";
import CommentPageListItem from "components/commentInfoPage/commentPage/CommentPageListItem";

interface ICommentPageList {
  data: TGetVendorCommentsComments;
}

function CommentPageList({data}: ICommentPageList) {
  return (
    <>
      {data?.map((item) => {
        return (
          <div key={item.id.toString()} className="mb-5">
            <CommentPageListItem
              name={item.name}
              comment={item.comment}
              date={item.updated_at}
              star={item.overallrate_num}
              tag={item.order_details.products}
              adminAnswer={item.admin_reply}
              vendorAnswer={item.vendor_reply}
            />
          </div>
        );
      })}
    </>
  );
}

export default CommentPageList;
