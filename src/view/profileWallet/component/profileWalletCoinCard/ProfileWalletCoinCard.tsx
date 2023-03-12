import styles from "view/profileWallet/component/profileWalletCoinCard/profileWalletCoinCard.module.scss";
import ProfileWalletCoinCardCoin from "view/profileWallet/component/profileWalletCoinCard/ProfileWalletCoinCardCoin";
import ProfileWalletCoinCardSlider from "view/profileWallet/component/profileWalletCoinCard/ProfileWalletCoinCardSlider";
import ProfileWalletCoinCardCurrencyValue from "view/profileWallet/component/profileWalletCoinCard/ProfileWalletCoinCardCurrencyValue";
import ProfileWalletCoinCardSubmit from "view/profileWallet/component/profileWalletCoinCard/ProfileWalletCoinCardSubmit";

function ProfileWalletCoinCard() {
  return (
    <div className={styles.profile_wallet_coin_card_container}>
      <ProfileWalletCoinCardCoin />
      <div>افزایش اعتبار کیف پول از گنجینه</div>
      <ProfileWalletCoinCardSlider />
      <div className="flex">
        <ProfileWalletCoinCardCurrencyValue />
        <ProfileWalletCoinCardSubmit />
      </div>
    </div>
  );
}

export default ProfileWalletCoinCard;
