import styles from "view/home/home.module.scss";
import message from "assets/images/homeMessage.svg";
import divar from "assets/images/homeDivar.svg";
import game1 from "assets/images/homeGame.svg";
import game2 from "assets/images/homeGame2.svg";
import Link from "next/link";

const data = [
  {title: "پیام ها", link: "", image: message.src},
  {title: "دیوار", link: "", image: divar.src},
  {title: "بازی 1", link: "https://aa.app.delishop.me/", image: game1.src},
  {title: "بازی 2", link: "", image: game2.src},
];

function HomeBottomNavigation() {
  return (
    <div className="fixed z-10 bottom-[20px] left-[44px] right-[44px]">
      <div className={styles.home_bottom_navigation}>
        <div className="flex w-full items-center justify-between mobile:mx-[30px] mx-3">
          {data.map((item, index) => {
            return item.title === "بازی 1" ? (
              <Link href={item.link} target="_blank" key={index} className="h-[78px] w-full ml-2 last:ml-0">
                <img src={item.image} alt={item.title} className="w-auto h-auto rounded-[6px] mx-auto" />
                <div className="text-[13px] text-center mt-1">{item.title}</div>
              </Link>
            ) : (
              <div key={index} className="h-[78px] w-full ml-2 last:ml-0">
                <img src={item.image} alt={item.title} className="w-auto h-auto rounded-[6px] mx-auto" />
                <div className="text-[13px] text-center mt-1">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeBottomNavigation;
