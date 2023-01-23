import styles from "view/awardReceived/component/awardReceivedCard.module.scss";
import {IconAward} from "assets/icons";
import {Button} from "antd";

interface IAwardReceivedCard {
  title: string;
  discount: string;
  description: string;
}

function AwardReceivedCard(props: IAwardReceivedCard) {
  const {discount, title, description} = props;
  return (
    <div className={styles.award_received_card_container}>
      <div className={styles.award_received_card_content}>
        <div className="text-[13px]">{title}</div>
        <div className="flex my-[10px]">
          <div className="flex flex-1 justify-center bg-[#E1E2E8] font-medium rounded-md p-1 border border-dashed border-borderColor">
            {discount}
          </div>
          <Button className={styles.award_received_card_copy}>کپی</Button>
        </div>
        <div className="text-[13px]">{description}</div>
      </div>
      <div className={styles.award_received_card_ticket}>
        <IconAward className="w-10 h-auto text-primary" />
      </div>
    </div>
  );
}

export default AwardReceivedCard;
