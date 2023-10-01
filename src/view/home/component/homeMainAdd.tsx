import {CustomSwiper} from "components";
import {useVendorDetailStateGoodsData} from "../context/HomeStateGoodsProvider";
import {Autoplay} from "swiper";
import Image from "next/image";
import {Button} from "antd";
import Link from "next/link";
import {IconAdd} from "assets/icons";

function HomeMainAdd() {
  const {data} = useVendorDetailStateGoodsData();
  const products = data?.menus?.groups[1]?.products;
  return (
    <div className="bg-[#066FAA] w-full px-4 py-2 mb-6">
      <p className="text-white text-lg font-bold mb-4">عرضه مستقیم کالای دولتی</p>
      <CustomSwiper
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={10}
        className="pb-10"
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        //   stopOnLastSlide: false,
        // }}
        data={products || []}
        renderItem={(item) => {
          return (
            <div className="flex gap-4 rounded-xl text-white">
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={item?.productKinds[0]?.photo_igu}
                  alt=""
                  width={210}
                  height={210}
                  className="object-cover rounded-xl"
                />
                {item.discount_num ? (
                  <div className="absolute top-0 left-0 w-[30px] h-[30px] bg-[#FF2F2F] rounded-br-full flex justify-center items-center">
                    %{item.discount_num}
                  </div>
                ) : null}
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold">{item.displayname}</p>
                <p className="font-extralight">{item.description_te}</p>
                <div className="absolute bottom-0 ">
                  {item.discount_num ? (
                    <div>
                      <small className="font-thin line-through">
                        {(item?.productKinds[0]?.price / 10)?.toLocaleString("en-US")}
                      </small>
                      <p>{(item?.productKinds[0]?.price / 10)?.toLocaleString("en-US")} تومان</p>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center ">
                      <p>{(item?.productKinds[0]?.price / 10)?.toLocaleString("en-US")} تومان</p>
                      <span className="rounded-full w-8 h-8 bg-white mr-10 flex justify-center items-center">
                        <IconAdd className="w-4" fill="#066FAA" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        }}
      />
      <Link href="/Governmental/37">
        <Button className="bg-[#00517F] text-white border-none w-full mb-4" size="large">
          مشاهده همه محصولات
        </Button>
      </Link>
    </div>
  );
}

export default HomeMainAdd;
