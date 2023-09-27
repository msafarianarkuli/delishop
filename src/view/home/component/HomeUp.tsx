import img from "assets/images/home-up.png";
import {Button} from "antd";
import styles from "view/home/home.module.scss";

function HomeUp() {
  return (
    <div className="px-screenSpace mt-5">
      <div className="relative w-full pb-[100%]">
        <div className="absolute z-10 top-0 right-0 left-0">
          <div className="w-full flex items-center">
            <Button
              className={`rounded-full ${styles.up_btn}`}
              onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
            >
              بریم بالا
            </Button>
          </div>
        </div>
        <div className="absolute w-full h-full">
          <img src={img.src} alt="home-up" className="w-full h-full object-center object-cover" />
        </div>
      </div>
    </div>
  );
}

export default HomeUp;
