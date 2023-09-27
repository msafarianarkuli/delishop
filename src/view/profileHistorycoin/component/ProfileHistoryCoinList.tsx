import {useCallback, useEffect} from "react";
import ProfileHistoryCoinCard from "view/profileHistorycoin/component/profileHistoryCoinCard/ProfileHistoryCoinCard";
import {useProfileHistoryCoinData} from "view/profileHistorycoin/context/ProfileHistoryCoinDataProvider";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import {number2Digits} from "utils/utils";
import {useInView} from "react-intersection-observer";

dayjs.extend(jalaliday);

function ProfileHistoryCoinList() {
  const {data, isLoading} = useProfileHistoryCoinData();

  return (
    <div className="px-screenSpace mt-[250px]">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.points_history.length ? <div>موردی یافت نشد</div> : null}
      <ProfileHistoryCoinListShow />
    </div>
  );
}

function ProfileHistoryCoinListShow() {
  const {data, fetchNextPage} = useProfileHistoryCoinData();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const time = useCallback(
    (date: string) => number2Digits(dayjs(date).hour()) + ":" + number2Digits(dayjs(date).minute()),
    []
  );
  const date = useCallback((date: string) => dayjs(date).calendar("jalali").locale("fa").format("YYYY/MM/DD"), []);
  console.log("dataaaa", data?.pages);
  return (
    <>
      {data?.pages.map((value, index, array) => {
        return value.points_history.map((item, idx, arr) => {
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          const point = item.point_type;
          return (
            <div ref={tmpRef} key={item.id}>
              <ProfileHistoryCoinCard
                coin={point.value}
                time={time(item.updated_at)}
                date={date(item.updated_at)}
                status="دریافتی"
                description={point.displayname}
              />
            </div>
          );
        });
      })}
    </>
  );
}

export default ProfileHistoryCoinList;
