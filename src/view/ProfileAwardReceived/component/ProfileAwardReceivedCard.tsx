import styles from "view/ProfileAwardReceived/component/profileAwardReceivedCard.module.scss";
import {IconAward} from "assets/icons";
import {Button, Tooltip} from "antd";
import line from "assets/images/line.png";
import {useCallback, useEffect, useState} from "react";
import {copyContent} from "utils/utils";

interface IAwardReceivedCard {
  title: string;
  discount: string;
  description: string;
}

function ProfileAwardReceivedCard(props: IAwardReceivedCard) {
  const {discount, title, description} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [isTooltip, setIsTooltip] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTooltip) {
      timeout = setTimeout(() => setIsTooltip(false), 2000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [isTooltip]);

  const onClick = useCallback(() => {
    setIsLoading(true);
    copyContent(discount)
      .then(() => {
        setIsTooltip(true);
        console.log("copy done");
      })
      .catch((err) => console.log("copy err", err))
      .finally(() => setIsLoading(false));
  }, [discount]);

  return (
    <div className={styles.profile_award_received_card_container}>
      <div className={styles.profile_award_received_card_content}>
        <div className="text-[13px]">{title}</div>
        <div className="flex my-[10px] items-center">
          <div className="flex flex-1 justify-center bg-[#E1E2E8] font-medium rounded-md p-1 border border-dashed border-borderColor break-all">
            {discount}
          </div>
          <Tooltip placement="top" title="کپی شد" open={isTooltip}>
            <Button loading={isLoading} className={styles.profile_award_received_card_copy} onClick={onClick}>
              کپی
            </Button>
          </Tooltip>
        </div>
        <div className="text-[13px]">{description}</div>
      </div>
      <div className={styles.profile_award_received_card_ticket}>
        <IconAward className="w-10 h-auto text-primary" />
        <div className="absolute right-[-1px] top-[8px] bottom-0 w-[1px]">
          <img src={line.src} alt={title} className="w-full h-full object-center object-cover" />
        </div>
      </div>
    </div>
  );
}

export default ProfileAwardReceivedCard;
