import {IconStar} from "assets/icons";

interface IVendorProductRestaurantCommentItem {
  name: string;
  comment: string;
  date: string;
  star: number;
  tag: string;
  answer: string;
}

function VendorProductRestaurantCommentItem(props: IVendorProductRestaurantCommentItem) {
  const {tag, answer, star, date, name, comment} = props;
  return (
    <>
      <div className="text-[17px] mb-1">{name}</div>
      <div className="flex items-center justify-between text-[13px] font-light">
        <div>{date}</div>
        <div className="flex items-center">
          <IconStar className="w-3 h-3 text-primary ml-1" />
          <span className="h-[15px]">{star}</span>
        </div>
      </div>
      <div className="my-4">{comment}</div>
      <div className="flex">
        <div className="w-auto py-1 px-5 rounded bg-[#D0D2DB] text-[12px] font-light mt-2 mb-3">{tag}</div>
      </div>
      <div className="border border-borderColor py-2 px-3 text-[13px] rounded">
        <div className="text-primary">پاسخ مدیر</div>
        <div>{answer}</div>
      </div>
    </>
  );
}

export default VendorProductRestaurantCommentItem;
