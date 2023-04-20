import {useEffect} from "react";
import ProfileAwardReceivedCard from "view/ProfileAwardReceived/component/ProfileAwardReceivedCard";
import {useProfileAwardReceivedData} from "view/ProfileAwardReceived/context/ProfileAwardReceivedDataProvider";
import {useInView} from "react-intersection-observer";

function ProfileAwardReceivedList() {
  const {data, isLoading} = useProfileAwardReceivedData();

  return (
    <div className="px-screenSpace mt-[132px]">
      {isLoading ? <div>loading ...</div> : null}
      {!isLoading && !data?.pages[0]?.discounts.length ? <div>موردی یافت نشد</div> : null}
      <ProfileAwardReceivedListShow />
    </div>
  );
}

function ProfileAwardReceivedListShow() {
  const {data, fetchNextPage} = useProfileAwardReceivedData();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <>
      {data?.pages.map((value, index, array) => {
        return value.discounts.map((item, idx, arr) => {
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <div key={idx} ref={tmpRef}>
              <ProfileAwardReceivedCard
                key={item.id}
                title={item.title}
                discount={item.code}
                description={item.description}
              />
            </div>
          );
        });
      })}
    </>
  );
}

export default ProfileAwardReceivedList;
