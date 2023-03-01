import {IconStar} from "assets/icons";
import {TGetVendorCommentsCommentsItemOrderDetailsProducts} from "types/interfaceVendorComments";
import dayjs from "dayjs";
import jalaliday from "jalaliday";

dayjs.extend(jalaliday);

interface IRestaurantCommentItem {
  name?: string | null;
  comment: string;
  date: string;
  star: number;
  tag: TGetVendorCommentsCommentsItemOrderDetailsProducts;
  vendorAnswer?: string | null;
  adminAnswer?: string | null;
}

function RestaurantCommentItem(props: IRestaurantCommentItem) {
  const {tag, vendorAnswer, adminAnswer, star, date, name, comment} = props;
  return (
    <>
      <div className="text-[17px] mb-1">{name || "ناشناس"}</div>
      <div className="flex items-center justify-between text-[13px] font-light">
        <div>{dayjs(date).calendar("jalali").locale("fa").format("DD MMMM YYYY")}</div>
        <div className="flex items-center">
          <IconStar className="w-3 h-3 text-primary ml-1" />
          <span className="h-[15px]">{star}</span>
        </div>
      </div>
      <div className="my-4">{comment}</div>
      <div className="flex">
        {tag.map((item) => {
          return (
            <div key={item.id} className="w-auto py-1 px-5 rounded bg-[#D0D2DB] text-[12px] font-light mt-2 mb-3 ml-2">
              {item.displayname}
            </div>
          );
        })}
      </div>
      {vendorAnswer ? (
        <div className="border border-borderColor py-2 px-3 text-[13px] rounded">
          <div className="text-primary">پاسخ مدیر رستوران</div>
          <div>{vendorAnswer}</div>
        </div>
      ) : null}
      {adminAnswer ? (
        <div className="border border-borderColor py-2 px-3 text-[13px] rounded">
          <div className="text-primary">پاسخ ادمین</div>
          <div>{adminAnswer}</div>
        </div>
      ) : null}
    </>
  );
}

export default RestaurantCommentItem;
