import {ProfileWalletTabRoute} from "components";
import ProfileMainTabRoute from "components/appTabRoute/component/profileMainTabRoute/ProfileMainTabRoute";
import HomeHeader from "view/home/component/HomeHeader";
import crush from "../../../assets/images/game/crush.png";
import aa from "../../../assets/images/game/aa.png";
import GameCard from "./GameCard";
import {useSession} from "next-auth/react";

const GamePage = () => {
  const {data: session} = useSession();

  const data = [
    {
      id: 1,
      name: "crush",
      link: `https://crush.delishop.me?token=${session?.user.token}&userId=${session?.user.useId}`,
      image: crush,
      color: "#FEB703",
    },
    {
      id: 2,
      name: "aa",
      link: `https://aa.delishop.me?token=${session?.user.token}&userId=${session?.user.useId}`,
      image: aa,
      color: "#8ecae6",
    },
  ];
  return (
    <>
      <HomeHeader />
      <ProfileMainTabRoute active="historycoin" />
      <ProfileWalletTabRoute active="game" />
      <div className="flex flex-col mt-[250px] px-screenSpace gap-6">
        {data.map((item) => (
          <GameCard key={item.id} name={item.name} image={item.image.src} link={item.link} color={item.color} />
        ))}
      </div>
    </>
  );
};

export default GamePage;
