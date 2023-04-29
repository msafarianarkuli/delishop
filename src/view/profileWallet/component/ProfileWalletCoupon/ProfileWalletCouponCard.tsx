import {Button} from "antd";
import {IconCoinProfile} from "assets/icons";
import line from "assets/images/line.png";
import styles from "view/ProfileAwardReceived/component/profileAwardReceivedCard.module.scss";

interface ProfileWalletCouponCard {
  title: string;
  value: string;
  description: string;
}

function ProfileWalletCouponCard(props: ProfileWalletCouponCard) {
  const {value, description, title} = props;

  return (
    <div className={styles.profile_award_received_card_container}>
      <div className={styles.profile_award_received_card_content}>
        <div className="text-[9px]">{title}</div>
        <div className="flex my-[10px] items-center">
          <div className="flex flex-1 justify-center bg-[#E1E2E8] font-semibold text-[10px] rounded-md p-1 border border-dashed border-borderColor break-all">
            {value}
          </div>
          <Button className={styles.profile_award_received_card_copy}>دریافت</Button>
        </div>
        <div className="font-medium text-[9px]">{description}</div>
      </div>
      <div className={styles.profile_award_received_card_ticket}>
        <IconCoinProfile className="w-7 h-7" />
        <div className="absolute right-[-1px] top-[8px] bottom-0 w-[1px]">
          <img src={line.src} alt={title} className="w-full h-full object-center object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ProfileWalletCouponCard;
