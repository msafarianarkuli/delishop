import VendorProductRestaurantCommentItem from "view/vendorProduct/component/vendorProductRestaurant/VendorProductRestaurantCommentItem";

const arr = Array.from(new Array(5), (_, i) => i + 1);

function VendorProductRestaurantComment() {
  return (
    <div className="px-screenSpace mt-5">
      {arr.map((item) => {
        return (
          <div key={item} className="mb-5">
            <VendorProductRestaurantCommentItem
              name="الناز"
              comment="خیلی عالی بود دستخوش دمت گرم"
              date="5 مهر 1401"
              star={4}
              tag="خوراک کباب کوبیده"
              answer="ضمن عرض پوزش ازشما به اطلاع می رساند غذاهای ارائه شده توسط مجموعه تحت نظارت واحد کنترل کیفیت بوده و وزن و رسپی آن مطابق مقادیر اعلام شده می باشد. با سپاس از همراهی شما"
            />
          </div>
        );
      })}
    </div>
  );
}

export default VendorProductRestaurantComment;
