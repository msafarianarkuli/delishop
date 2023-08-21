import {IconRoundedLeft} from "assets/icons";
import {dateConvert} from "utils/utils";

interface IADvertisementCard {
  image: string;
  title: string;
  description: string;
  updateTime: string;
}

const AdvertisementCard = (props: IADvertisementCard) => {
  const {image, title, description, updateTime} = props;
  const {monthTitle, dayWeek, day} = dateConvert(updateTime);

  return (
    <div key="1" className="bg-white flex mx-2 rounded-lg gap-1 p-1 my-2">
      <img
        className="rounded-[25px] object-cover max-w-[80px] max-h-[70px]"
        src={`https://app.delishop.me${image}`}
        alt={title}
      />

      <div className="w-full mr-3">
        <div className="flex justify-between items-center">
          <h5 className="text-[13px] font-[500]">{title}</h5>
          <div className="flex">
            <span className="text-[10px] mr-2">{`${dayWeek} ${day} ${monthTitle}`}</span>
            <IconRoundedLeft className="w-3 mr-1" />
          </div>
        </div>
        <p className="text-[11px] mt-1">
          {description?.length > 100 ? description.slice(0, 100) + "..." : description}
        </p>
        {/* <div className="text-left pl-1 text-[11px] text-primary">خودرو</div> */}
      </div>
    </div>
  );
};

export default AdvertisementCard;
