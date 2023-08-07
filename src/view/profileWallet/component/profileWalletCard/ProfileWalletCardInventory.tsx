import {useUserWallet} from "template/context/UserWalletProvider";

function ProfileWalletCardInventory() {
  const {data} = useUserWallet();
  const balance = data?.toString()?.slice(0, -1);
  return (
    <>
      <div>موجودی کیف پول شما</div>
      <div className="text-center text-[30px] font-light my-5">
        <span>{Number(balance)?.toLocaleString("en-US")}</span>
        <span className="mr-2">تومان</span>
      </div>
    </>
  );
}

export default ProfileWalletCardInventory;
