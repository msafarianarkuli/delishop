import React from "react";
import ProfileAwardReceivedCard from "view/ProfileAwardReceived/component/ProfileAwardReceivedCard";
import {useProfileAwardReceivedData} from "view/ProfileAwardReceived/context/ProfileAwardReceivedDataProvider";

function ProfileAwardReceivedList() {
  const {data} = useProfileAwardReceivedData();

  if (!data?.points_history.length) return <div className="px-screenSpace mt-[132px]">جایزه ای یافت نشد</div>;
  return (
    <div className="px-screenSpace mt-[132px]">
      {data?.points_history.map((item) => {
        const point = item.point_type;
        return (
          <ProfileAwardReceivedCard
            key={item.id}
            title={point.displayname}
            discount={item.id.toString()}
            description={point.discription}
          />
        );
      })}
    </div>
  );
}

export default ProfileAwardReceivedList;
