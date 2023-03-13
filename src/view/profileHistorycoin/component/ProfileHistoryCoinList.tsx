import React, {useCallback} from "react";
import ProfileHistoryCoinCard from "view/profileHistorycoin/component/profileHistoryCoinCard/ProfileHistoryCoinCard";
import {useProfileHistoryCoinData} from "view/profileHistorycoin/context/ProfileHistoryCoinDataProvider";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import {number2Digits} from "utils/utils";

dayjs.extend(jalaliday);

function ProfileHistoryCoinList() {
  const {data} = useProfileHistoryCoinData();
  const time = useCallback(
    (date: string) => number2Digits(dayjs(date).hour()) + ":" + number2Digits(dayjs(date).minute()),
    []
  );
  const date = useCallback((date: string) => dayjs(date).calendar("jalali").locale("fa").format("YYYY/MM/DD"), []);

  if (!data?.points_history.length) return <div className="px-screenSpace mt-[132px]">تاریخچه ای یافت نشد</div>;
  return (
    <div className="px-screenSpace mt-[132px]">
      {data?.points_history.map((item) => {
        const point = item.point_type;
        return (
          <ProfileHistoryCoinCard
            key={item.id}
            coin={point.value}
            time={time(item.updated_at)}
            date={date(item.updated_at)}
            status="دریافتی"
            description={point.displayname}
          />
        );
      })}
    </div>
  );
}

export default ProfileHistoryCoinList;
