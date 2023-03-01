import styles from "view/profileHistorycoin/component/profileHistoryCoinCard/profileHistoryCoinCard.module.scss";

interface IHistoryCoinCard {
  coin: number;
  date: string;
  time: string;
  description: string;
  status: string;
}

function ProfileHistoryCoinCard(props: IHistoryCoinCard) {
  const {time, date, description, coin, status} = props;
  return (
    <div className={styles.profile_history_coin_card_container}>
      <div className="flex items-center justify-between">
        <div>
          <span>{coin}</span>
          <span className="font-light mr-2">سکه</span>
        </div>
        <div className="text-[13px] font-light">
          <span>{date}</span>
          <span className="ml-3">{time}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[22px]">
        <div className="text-[12px] font-light">{description}</div>
        <div className="text-primary">{status}</div>
      </div>
    </div>
  );
}

export default ProfileHistoryCoinCard;
