import {ProfileWalletAppHeader, ProfileWalletTabRoute} from "components";
import ProfileHistoryCoinCard from "view/profileHistorycoin/component/profileHistoryCoinCard/ProfileHistoryCoinCard";

const arr = Array.from(new Array(20), (_, i) => i + 1);

function ProfileHistoryCoin() {
  return (
    <>
      <ProfileWalletAppHeader />
      <ProfileWalletTabRoute active="historyCoin" />
      <div className="px-screenSpace mt-[132px]">
        {arr.map((item) => {
          return (
            <ProfileHistoryCoinCard
              key={item}
              coin={750}
              time="18:27"
              date="1401/04/04"
              status="دریافتی"
              description="سفارش غذا از رستوران آریایی"
            />
          );
        })}
      </div>
    </>
  );
}

export default ProfileHistoryCoin;
