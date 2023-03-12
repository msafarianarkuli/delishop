import styles from "view/profileWallet/component/profileWalletCard/profileWalletCard.module.scss";
import ProfileWalletCardCharge from "view/profileWallet/component/profileWalletCard/ProfileWalletCardCharge";
import ProfileWalletCardInventory from "view/profileWallet/component/profileWalletCard/ProfileWalletCardInventory";
import ProfileWalletCardSubmit from "view/profileWallet/component/profileWalletCard/ProfileWalletCardSubmit";

function ProfileWalletCard() {
  return (
    <div className={styles.profile_wallet_card_container}>
      <ProfileWalletCardInventory />
      <ProfileWalletCardCharge />
      <ProfileWalletCardSubmit />
    </div>
  );
}

export default ProfileWalletCard;
