import React from "react";
import {TGetVendorCommentsComments} from "types/interfaceVendorComments";
import CommentPageListItem from "components/commentInfoPage/commentPage/CommentPageListItem";

export interface ICommentPageListBase {
  data: TGetVendorCommentsComments;
}

interface ICommentPageList extends ICommentPageListBase {
  color: string;
}

function CommentPageList({data, color}: ICommentPageList) {
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
              color={color}
            />
          </div>
        );
      })}
    </>
  );
}

export default CommentPageList;
