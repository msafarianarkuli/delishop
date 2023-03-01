import {ProfileWalletTabRoute} from "components";
import ProfileWalletAppHeader from "components/appHeader/component/ProfileWalletAppHeader";
import ProfileAwardReceivedCard from "view/ProfileAwardReceived/component/ProfileAwardReceivedCard";

const arr = Array.from(new Array(10), (_, i) => i + 1);

function ProfileAwardReceived() {
  return (
    <>
      <ProfileWalletAppHeader />
      <ProfileWalletTabRoute active="awardReceived" />
      <div className="px-screenSpace mt-[132px]">
        {arr.map((item) => {
          return (
            <ProfileAwardReceivedCard
              key={item}
              title="سفارش غذا از اپلیکیشن آریایی"
              discount="NSH-RM-21"
              description="50 هزار تومان تخفیف سفارش غذا"
            />
          );
        })}
      </div>
    </>
  );
}

export default ProfileAwardReceived;
