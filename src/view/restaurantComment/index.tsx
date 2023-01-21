import RestaurantCommentHeader from "view/restaurantComment/component/RestaurantCommentHeader";
import RestaurantCommentRate from "view/restaurantComment/component/RestaurantCommentRate";
import RestaurantCommentItem from "view/restaurantComment/component/RestaurantCommentItem";

const arr = Array.from(new Array(5), (_, i) => i + 1);

function RestaurantComment() {
  return (
    <>
      <RestaurantCommentHeader />
      <div className="mt-headerNormal px-screenSpace">
        <RestaurantCommentRate />
        <div className="my-5 text-[18px] font-medium">نظرات کاربران</div>
        {arr.map((item) => {
          return (
            <div key={item} className="mb-5">
              <RestaurantCommentItem
                name="الناز"
                date="5 مهر 1401"
                star={4}
                tag="خوراک کباب کوبیده"
                answer="ضمن عرض پوزش ازشما به اطلاع می رساند غذاهای ارائه شده توسط مجموعه تحت نظارت واحد کنترل کیفیت بوده و وزن و رسپی آن مطابق مقادیر اعلام شده می باشد. با سپاس از همراهی شما"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default RestaurantComment;
