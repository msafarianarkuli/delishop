import {useUserCoin} from "template/context/UserCoinProvider";

function AppHeaderCoins() {
  const {data} = useUserCoin();

  return <span>{data}</span>;
}

export default AppHeaderCoins;
