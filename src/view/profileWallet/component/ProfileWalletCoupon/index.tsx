import {useEffect} from "react";
import ProfileWalletCouponCard from "view/profileWallet/component/ProfileWalletCoupon/ProfileWalletCouponCard";
import {useProfileWalletCouponData} from "view/profileWallet/context/ProfileWalletCouponDataProvider";
import {useInView} from "react-intersection-observer";

function ProfileWalletCoupon() {
  const {data, fetchNextPage} = useProfileWalletCouponData();
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div>
      {data?.pages.map((value, index, array) => {
        return value.points_history.map((item, idx, arr) => {
          const condition = array.length - 1 === index && arr.length - 1 === idx;
          const tmpRef = condition ? ref : null;
          return (
            <div key={idx} ref={tmpRef}>
              <ProfileWalletCouponCard
                title={item.description}
                value="50+ هزارتومان"
                description="5000 سکه مورد نیاز"
              />
            </div>
          );
        });
      })}
    </div>
  );
}

export default ProfileWalletCoupon;
