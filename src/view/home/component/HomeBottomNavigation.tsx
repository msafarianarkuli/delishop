import styles from "view/home/home.module.scss";

const data = ["دیوار", "پیام ها", "aa", "crash"];

function HomeBottomNavigation() {
  return (
    <div className="fixed z-10 bottom-[20px] left-[44px] right-[44px]">
      <div className={styles.home_bottom_navigation}>
        {data.map((item, index) => {
          return (
            <div key={index} className="ml-5 last:ml-0">
              <div className="w-[55px] h-[55px] rounded-[6px] bg-[#D9D9D9]" />
              <div className="text-[13px] text-center mt-1">{item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeBottomNavigation;
